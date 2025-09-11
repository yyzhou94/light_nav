export async function onRequest(context) {
  // 从URL查询参数中获取目标网站域名
  const { searchParams } = new URL(context.request.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return new Response('缺少 domain 参数', { status: 400 });
  }

  // 使用 Google 的 favicon 服务作为目标
  const targetUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;

  try {
    // 使用 fetch 向目标 URL 发起请求
    // 这里的 fetch 是在 Cloudflare 的服务器上执行的，不受浏览器CORS限制
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Cloudflare-Icon-Proxy/1.0',
      },
    });

    // 如果请求失败，返回错误
    if (!response.ok) {
      return new Response(`获取图标失败: ${response.statusText}`, { status: response.status });
    }

    // 将从 Google 获取的响应直接返回给前端
    // Cloudflare 会自动处理响应头，包括 Content-Type 等
    return new Response(response.body, {
      headers: response.headers,
    });

  } catch (error) {
    return new Response(`代理请求时出错: ${error.message}`, { status: 500 });
  }
}
