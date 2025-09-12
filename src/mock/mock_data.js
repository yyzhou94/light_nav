export const mockData = {
  "categories": [
    {
      "id": "my-favorites",
      "name": "校内常用",
      "icon": "💼",
      "order": 0,
      "sites": [
        {
          "id": "site-1757494744952",
          "name": "东南大学",
          "url": "https://www.seu.edu.cn/",
          "description": "人文关怀毫无六朝遗韵",
          "icon": "https://wget.la/https://raw.githubusercontent.com/yyzhou94/light_nav/master/public/logo.png"
        },
        {
          "id": "site-1757494926253",
          "name": "信息服务门户",
          "url": "https://i.seu.edu.cn/",
          "description": "财务报销点这里",
          "icon": "data:image/png;base64,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"
        },
        {
          "id": "site-1757494988906",
          "name": "网信中心",
          "url": "https://nic.seu.edu.cn/",
          "description": "装软件点这里",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAQAElEQVR4AexdDYwkR3V+1buAjzvANr9JiDxDBMGAhUOQQhDJ7UoG+fYcxSi3BO/i21l+kxjZuzZJbEVi9xAKp5D47kwcBUTYWSMM8p4cR7nbs4Kj3XNQhBSUOLECSWwzewIpmCRgBw47sDuV9/VM9bzu6fn/6+l+rX5T1VWvXlV99b6uqp7eWY86OGZmC4WZ2YU1llJVLIcqswuKQbIxKB2aXdiCXHekMHXtuwu5dt2+JUFgEIZBBCK7xoYLLKgAwlE9FYHEI5AzRFOQsrFb3p71CdMOUZoShEmxBoMwTHooAilCAD4NosDHmxElliAogFmD8cBswUFwFonMomfNdHnC5Dc31o2KYpB0H4CvwmfJ2lUi2qHwUWCibMHnw8mVqzqCYEnFBUpgWEWFF1ZE26iAgVjc3CgWz5wubj/4pWK0IqeuoSKQKATgq/DZzdP3HNvcWM/Dly37tGhkDj4fR5IQQaCAJZUoSDB2bmN9GhXI9NZx1VAEkokAfBk+HZ1RmCR1M0mIIGbP34S7Xu2AHDDmEjRUBNKEAGYU9vFF7pNbDWEmCZEkIMjMkaMrhnf6rOyfKNiIHKVSqcCyxrKlUlIMSonHYKVUKk2x5HznFh8VHzfHOKlGkt3yAl/7p08QLK3IGGxg/ERMPZWClUv3yRWgIl6+kXvcO8V5KkSKQbIxgG9vERG7cAk+nON4cG7yvpp9vhgkMBd8TnCCTxBPMIbTdjD1cBicpVIpx4IKUFGQrhFFYAwRgA9j9RMmCW/guS9uFiHHCZ8gPHsUOLNyWltjUiUFn5gxcJdEfPSiLVAEekMAvhwsowJTwvetMdAhrzqVBGyKmT1AHl85MKQRRWD8EVjlVdGK7EbV9/1ZxBD5r6R43h5J5/czKXxg9gin6JUikA4EpO/7PbLii0RwwyNbvsLPwYeYYnDJDMshFILlV56vVYgUg/HEYJv91511T7Z45ghNEpU9iFOvD6MEoXw+v6OiGIyrD9S7OEV83Jyn4LAHPTKmpmC8C0FeJXKwEmTnU3uaOQRq/h/TdS8mTZMUAUWgikDPBJmZXfgsy/dVFhSD2cRh8Nmqn3cd9EwQrvl9LJeqkGJACcPA2vrvOqizoyeCXHvDjW/rrDrVVgSGiIAxk736aE8EiXbVWLOs0hADxWZI/kHW7kZ9s9vr/hGEG3X2dPGkimIwah/olgxx5fpHkDjrmqYIjDkCSpAxH0Bt/mARUIIMFl+1PuYIKEHGfAArzdfPQSGgBBkUsmo3FQgoQVIxjNqJQSGQeILgD7rwgxIqR1dShcFsoYDfYBuUY/fLbiIJAkfALzvOzC5Yb8+WyJhVlZRhQNb/WVse48oPoR85Gvrrvn45eK92EkUQzBYgBshgiOr+2ov0GD4Cg68xx1XkMOYgC3yArxNzJoYgmDUwW8QQA3/hhb9kVCFKFQaWSP51H/Hh/3AbfIHjiTgTQRB/LYpllITE2tXNyo9j40eyFzmusrGeKgzw85/4YWnisRZD788mvk+IxFFFE0EQ+XvAuKsAtOovTIwKF613SAjgh6Ux1hhzrhKrBQ6I2CfWkrDcGjlB/D2HD4n/sYO7CkDzr/QjMwhgzJkk09xhRxIst1b4eqTnyAki9xz4PeB20XjmxFLuByeWOtrId1rmmU9+OH/xxNIhlsNc15Xttk312kMgqgWSRHygMOpZZKQEwf88FCD5/3dEXMdG2VGnLt55iy1bW/Ks3eJ46eKJm5veabopc/HOpWJ5YuKbvD7eZDnDdX2d6/rr73zyI/tjG6aJfUEAvwmNZbYzNrlLORrhMVKCkPxNrjZAgKOzo+I3gqV2jqxZRZ5MdHGkd1qGifBRIrvgbIjwuhd4uyfFtUYHgICxNni6VabySH9ZZ7QEkT85REb8HlE86l680/rKTII1PxL56KYMm3gnS+xpjX1XbIYm9g0Bj7zAF9xv5PbNeIeGRksQomAP4VlymzNqeFgK9Kndo5syRD/TyDzvmV74veMffFGjfE3vLwKMd66/FjuzNmqCdNRaS9SMRLFAdlOGiC6yNDwve/anm+Y3LKgZw0Kgb/WMFUF4r7HesOfGrsbmWdNxGUv272JtcaK19LBZXd3lqJ4ZQGCsCHLgtpNFiiGCJdrev3zXsbjx6qbMcybtcbb1JEv0LJOlj0cT9Tq9CIwVQTAMIIK1ZpEMVcjChDlw66lpanJ0WuZ5N3/q69ajN/JMcgc/UfmCMfRFNv+xPY9ed+Ajp77McT0zgsDYEQTjgllh//KpRTg+BGmtpNMyB5ZOPXng1ruOP/+2u97z/OVTc/tvPbXywqVT/96qHs1PFwJjSZB0DYH2JskI1BMkya3VtikCQ0YgGQSxlvZo77pDv3HjB1QUA/gCsU8MmQux1SWDILwLNsa7zXjeZ1QUA/gCsU/EeuyQE5NBkCF3WqtTBNpFICEEMfz1Bv0tkblXRTEw1vcFSsIxVII07rAlpsjHNzeK8yqKAXyB+BvZxv4yvJyEEGR4HdaaFIFOEFCCdIKW6mYOgcQSxD56ZEolQxh84/rYt7FHzchEEgTEIFPeUskQBruTSpAB3g3UtCIwEAQSOYMMpKdqVBHoAgElSBegaZHsIKAEyc5Ya0+7QEAJ0gVoWiQ7CChBWo61KmQZASVIlkdf+94SASVIS4hUIcsIKEGyPPra95YIKEFaQqQKWUZACTLK0de6E4+AEiTxQ6QNHCUCSpBRoq91Jx4BJUjih0gbOEoElCCjRF/rTjwCSpDED1F3DdRS/UFACdIfHNVKShFQgqR0YLVb/UFACdIfHNVKShFQgqR0YLVb/UEgEwR58imPHnrkOf1BLGKlHbuoHxIp2vPlozsT1I7ddtrYQWMC1UHZDSpIQCT1BLl3+7n03lP76d7zz+073HCQE391iW8f8WgFcF6XP4j6v3D+eXTH+j5CHagrWr/rO/JBpmh+L9ewB7s+toxxL7aSXDbVBIHT/MuFSR9/xDGg/kWfPpzTw/ajFybqrH73KRPMXHAoSJ1SlwmwBUHdceSEWfQd+YiDTAj7Jc4e7D/5dHrdKL09Y094+aVluuaNP+FY5YRDVWK9f8Ip4RzO0tzBH7toEF6V2yMIEqD70D/3b5nnHBS2r7n6J4S+Ii5l+defDS7Rd0iQ0EMEdiDOhMTYpaUlTDVBMEhwUAjicNJWswgGHksT6KJMI5HO3shBUXb+4P8h8AW2W9lF3SCfX6DBB+xAXPZcDDmRB9K4vuNakgrXUUHbUD/CaJ68ln2HfYjMT1M89QSBk8g7nHSs6EAi7/b15xMc6Q5e20fz3TUcGLruupGDIh/OA0EcjueWZbiOCsiLuhGijmi+u4aOizcjJ3TmIwSV7Ua+FOwnYLtZ39EH2TZpX9rqLp68UqknCCCHg4IoiEcHGGlO4Bwu3kxP3kFbOSjsSSeCg8I20qUgTTpeIyKhPMSVleR3aTJE3yEuTbbdpSHEzIEQgraApIhHRbYLdiFRnTRdZ4IgIMecWIbIQXaDCaeDuGuEcXpwYqkn7aJMnMCJIMiD88XZjaZBD3WhjBRJYpDT2ZU60fh8G7OItIvy6CPagLgTXMs2SbtOJ21hJgiCQYMjgSiIRwcaaVEHQVqcnrwDw0GdTeg3E3mnh/NJ3bh6kB8lDcpBkAeRNnHdSNB3CPL9uiIPC+JmC+hF65fXsAeBzTRLZggCR55rMIvA6SBuoOH4Li6dAjoQlyftubRGIZwJgnw4n3RKWQd00NY4PUlitBG60GtH5pvMInJWkDbRV7TV2Zd60p7LT2OYGYJg8OTgY+DdgEcdb04QqZmec2TYbiXQlXd8OB/KIHTtwPU8O/KcqB/5SEcIQRwibeG6laDvEOj5farOIpKoaCMeDUs9R16ph3wIbI2NdNnQTBHEOYDDCoMPp4O4NDheO3rSiV3ZViGcCgI9OCmcTpITeU7QBqknl3ZOB/mdyDyTz+mjz2iDJCfIgXqjetCVejLf2UtrmCmCYBDhXAghcBA4KeIQuWxppQdHQplOBGVAQFcGjgdx187xoDcXmUX64aDoEwT1oe94rIs4BOmQaBx6t/Ojb6RDoANBPAuSOYLA+XCndIMLB3Bx6ZTN9KSTu7IuhMM7cWkyhHPBNtJk3UiHIB2COATxZnrIdwI9VzfiLl2G82IWaZbeSK9Z36W9tMQzRxAMnHM8xJ1g9nCO69KgF02DHtKdjgzhnLjbQuTSSerA3pyYHVzefMRxoRfnjFE9Vx6hrB/LR6RFBW2HyHRcQ1ql+W26uvbqjtRPazyTBMFAy1kEgzsX47TQi6bHOS3KdyJwRth2ZRqRDnoQp4c4xF13G85HyBi9dnaj6XMxGDndtIbtECSVfYejOSedZ4dx8WhnoYd8pDdyZOQ5gY4v4iVJl+dC1DUnnK0R6aA3z21z5WTcpckQ+n7dfJe/6oo9mRWKv+xSG7xECZvoY0iheoF05OMScdhGPEuSWYLAmT6x8Ax97paLNDdV/yaucwLoIR960VnH6bgQTgQdSCtnQj5snl35QeCszo4MYbMdPZSBLuqGwD7S4gR9gg7som9xOi4N+dA7vvAjl5SpMLMEwSjDUSCIt5J29VrZkfnt2mxXT9puFYdNSCs95LerB920SaYJkrbB1P70HwElSP8xVYspQmDEBEkRktqVVCKgBEnlsGqn+oWAEqRfSKqdVCKgBEnlsGqn+oWAEqRfSKqdVCKQXoKkcri0U8NGQAkybMS1vrFCQAkyVsM1jMbabSII7RARhLJ8KEGyPPpB35kQ1ps2b7jfmDf8JYeQ+/PmDffnidMFYYISWYkoQbIy0g37abcNSHHVaZ456pUMp/v5GSWLEqTeJ1qmpEehQo52+5NFsihB2vWOFOphZoh2a2Z2oTQze/RHLE/PzC6cj+a766yQRQniRjxroaFVihyHZo/i72lzRGYfywuJ6FdnjiyUZ2aPZpYsShD2goyeF2S/Z3i2MGQq/0xFZnAikQmR5bojC39KDY60zSxKkAYDnfrkshd9hPuWWp/t/3J8x5Ld5bB2VslSNnRTZWZZKKWdLF6t9xpLAAIjbIIVf8RuHtncWM+f27jnOXbCznKjomQi8slCOUmWa99d4OUZxR6hmcXQItW+a4nVT0qiEiQpIzHsdnjliDObf3BN4JnjrS5+7kv3nN5ksoAohuwmOzZmF5ddCatk8XbtN7GPwXKtkhH/aV5/fxEPCAweHTuyTO7WkzC++FBTlSBDhTtBlVk6KFvDBPiUu2Z/n4wunUCUsxv3HN7cuOdFrItZ5WEm0q4r44dckE/sY4LNfdSOryc+ArJc+cCOSz5zurjNpDRVybv0UYRKkFGgnow6C/Yb1wezCAggHZ6XTocbNRO67LwHz9WWYLFkId7cs53qfuXo063IQgk8lCAJHJShNansTcm6+O7/98G1pSuCeJNIDFl2iJkWKsKGKUSW5pt7StDhJagt2pSBIhBj3FLDZRaxU8s7/jMnlnIXlRht5QAAD1FJREFU77yldPHELWs/OLEUIpazXCVLfvP0ulddhu24vCBkuxwPbe75OrGnEiSxQzOUhrVYZtkbXSv2LZ/kx760Q5YKnrVbFbLcvNKKLFWiPNxsc195ZNz8y0ga0aEEGRHwiam27IVmgwlrPh20zZoXBHGOWGOOceDOHFmzKslCMUd1VjnYanNPvAQjqn1zL2cvTh/Z6Y2sZq04GQhYCi2z9iZt7a1eQ0Y6Kj+e2mnQaJ8smFV+eOctWz/8k6VCnJ4ji9jc86zU6svI0W7ulSBxI5mttLplllwO7Rn7IQfHvuWTO7w3KbrrmDBniKaMsWsgSzv7FUkWara5n10o0QgOJcgIQE9clZFllmfN510bjTUTLo6wTGYdYUjiL3hWIbFf6WRzb+u/jCTKzcwefTq+qsGlKkEGh+34WLYUWmadOb3+Yb6ZV74ENOFl1guWT25botoyjNo6ImS5eQVPxeJKVpZhtS8j5WxGkT1RXPl+p42YIIY3fWaRyCye4W9PyR147QCvIKgs8pJmGFL3dx/Mi2+74ZDLLKTxEqpTgqCYEyaLWS1bW8IyrNV+Rc5mjIVxRoYVjpQgmxvFohPZYXPlAzv+Kwh4Z0elOAwsJP6I8+PZ30UIiS6zPPLaXWaheDPJWY92KOY49O6jR2Z431E2dFMt28YtvWrZA4iNlCAD6I+a7BMCWOrIZRac1ZnGZr2LZZYrHoRlY6axZAsSOFIhxtGnzZ7Z4MscS3CGZpMgdbARJchg8R1r64ZM8OoJk+WVoc5Y09ssYqgoyQFi4E3gCjH8P9Dyq/M/uHLP0t1neG/kXw/xQwkyRLDHrSpeZjV8w3fCo172IWTLJrzv2aMvMiH5qxaqHUwMvngYr66MghxcNylBgIJKLAKhZRZrlA0Fb/j2usySBOPl2/kIOXaYnLMgxubGeugJGzdjqGdfCXL4SGFJJV0YeNY8Hnhk5A3fyKsngVo7ERAsTo8njV1+KHDK2/Ve2a0vxdntNq1/BDFm0hp7QiVtGNBrA+fi23ybr54ERRpF5PcgnqVHnR5X0bMfEfuis9dr2D+C9NoSLT8WCOwZepVrKGaBbp9m8beQwRMq7C8wczi7QwrbqqYngjz4xc9/xVjCZu0pa+hZlXRiQEQ/ZvFPQ3SlH6l+WGP4y97qRQeBsXYlpD5BN/D1syz+yYRh7tlda7rHlA39BXyUw67PngiCWs+eXp/mjdRl5+5b36eSTgzKE+bnMdZVyV13pBC8Is+PnWK/6KvqNgyYaFPyb0nwQIDrAfl8e4bXSUTm26Zsj3frV+yX76cej54J0mP9WnwMEHjwS0U4bdE1dc/U7v77llu+4euK1YWetWtyL4J6mCTTrIj6OKAc86Qwc+RoeLah4R1KkOFhPdY1eeKLQUOUI3FE3/DltdE2Gbta5m/KPWPyCK01i1zEOT5H/TNXtnYrySRRgvjjpB+tEDhzurjtO35FMbTMwjfiLg9EOHDrqen9y3cdQzpmGIQHbjtZZLJMgzgVE8FnoknSKUEKpVLJllTsoHD42j/+k/2bh7YGZr+Xdl/39qkp59ZymeWn8QyDmQJE8K9jPkAWEIeJEv2tq7ZI8uLLL1u9+zNrPWHDzQr6wPGWZ6cEaWlQFTpHYPPL23Ty00W66fdW6aOfOOnHXYi8zi0OpsQvvfnqwDCWWfKnRkEMzBSBAkeQPzNbKMhNPScTiNINSf7n+0/RV7/2CA0TEyUIRmxEggEHMc4yQR57Irw8Rx7SkAeyID6iZgbVvviyS+nVPxdsP3LebnkhyIxEDs0ubHl7tkRk18rGbs3MLqxJlV5JMiw8PNlojQ8PAQxwnOO//KUvIYhsCcjy+fseGOqdU9Yv42/5xdosgidMMs/FQQ6eYaJLmQKThAnjtKinmQR41CwNLqYEGRy2TS1HB3h+9no6e1+RPnf3HweCNGcEJMHyAsRyaaMIxQyC6kObdSRgSSXJEdXvA0lQDQEPiH8xwI/EEWSAfU2MaSyr3OBitji+cjvNzV4fah/SkQbCXPX6yutQKBMlVqjQEC4iyywqUzn0tq0lGyy73sJ7lqUPFejw20OTSa4dkvBTsR0sw2SXJncpWN/RkA4lyJCAdtXAyeUssPw77ydHAKcjQxAFOi4tWt6lDzM8fI1weGMKrm5sxg1RkDlTJQbCTkjC5NjGo2ISB2xjL+OSMDOBrO56UKESZFDINrAryXHN1NuaksOZAEnkcuuxb4Y39E5vWOHll18qqwqWWezAodlDOnAnJGlFDti98V3hGVc2qJ9xJUg/0WzDlnTuq15XWTq1UYyk7n+MmCBwUNzBXbtBDDzS5etgNglt5jkDZ7skga6T6MyBukEOhE5nkKESZJDoxtjGEsklY2Zw8Vbhy172kkDle997KoiPKhJaZhEVKo90K60BeSCVq/BnOyRxJRqRo5FtV66fYZYI0k/chm7ru9/976HX2axCOCk24XE6EfLUqbRDkiSQAw1vRZALUFLpHwKveVUuMPbo1/8tiLeKPPlfNYLAOVvpDyMfji5JgmUPnlq10z6UbbRxHzI5whs6W75CYhcmSCSTFcOFOUHP3hB4tSDIQ9tfIen4zSw/dP4rQba0ESSOIAJCYD/wsTuW6O4/WiWE7ZDDNbURSXhPs+V0XB2d2HVl2wnz+fx2Qz1rd5gg5nygYEzt9saJ1cJKEsaiXyeeAGHQYQ/kOPFnn0W0qdy78QA9+q+12WZQztK0EU0yXX+aqDTMiiOJU4ZdEHCA/a337QgHPM+SVCpUn0aQOII/lBFpGu0SAQz6Lb8VPOzxHf+9N30kdiYBgW4/dpy+wASh6oElDGxUL1MRxJDEf+cLOA2QHMAuzreDwfHIO+/hPX/WDEji7VHwRQ/xwbPIMQ6CfI7rWYdAZwlwcLn+BhHuWD1OIANmFMwYiIM40ZljwA7TWUf6qA2SYIkGwXJtCDeCnapvB72ITA474AYvsfz8YB0mXxXwcyof0xwoSRiEfp14dTxKEpAB+xLMGIjLuqALp5FpaYvjxgEZUr/wF46hqsyerb1xbK0/u/gE8awJfmfVEE3hKYIsyUwDOUCSgEgyX+OdIwBHcHfNZrMC9EAM6HZei5aIQQA+zC4d3pzD5+H7Tr886fmc8AmCqYQzfMZwSPwUYS0y3RBbxJQEkkBWWQ8VgTgc1bNbBBwBsLQAEbApdbMFlhpIb0agbuvNWDn4NmSa/RgS8lv4Ovt88OSMrF3FD0gAI58giJQnjNxr5Pib0S0URJ4UrmCb5RgLKuIgb/L5vEqPGLz5Tb9g3nHNtLlh9p3mpg8u+vF8jza1fN755WI+n4fgpi7dmeDjoaUV0c7m6XvABV8vIIjPmMq6y7GrIUn8kvoxHAS0loEhgGUVJgK5tOLtRmhvEhAErfCZU0+SEn6XCEyDjooikAYE4NPVZVWu1p/IvwLkjBBB+JpiSEJkzCozrTQzu7AG1ilZSI8xRAB/7QgfZrHwadkFnjmmNzeKRZmGeB1BkAiScAFMNW65hWRIAayrksVyRSBN1uU/GYdn+I70k0TK7MIz3D60MevjZPEDEuzEwReBHCdO3GZfn64+qEJSSGIJAg0U2NxYzxOZOKJQ9cD0lHV5BWNxCd+RJhMpRJdw+9DGrI8TwxA9zeK5jfWG5IB2Q4IgE7LJ084mEwUs42tMQZhVIHyp5zgjkNG2F+HL7NNmk327FQYtCeIMVGeUxU0mC4QfC+dRUZaFsXmExZ0PGmuWkyTcMNm+R7I4VvBTCPssE2IdsghfZmzaOtsmSNQaHgujoqxKFY+rqyHxIPz22dPFk0kSJsSyax+Hl+5Okv9+UZbGDH4K4f53dXZNkK5qS1EhflgR/EABd6vYyyBw+YGcIAI2oVXjuWa/hFjV0SCCgBIkAkgHl8HTEL5T++/tdFB2aKqGTK1txgRtHloDxrwiJUgXA4jn6aKYv2wR11QqlT63s7PzmVEI1/1R2ZbyBMnXK4Kf6KHBHqmxrgTpaijtSq2YCd7bQdpjjz32Ug4XrbUfGIVw3e9lCc7q0g9PH/20un9b4KfqRyMElCCNkGmQXp098J2Cr7EZeVQ4OTkZclBfabgfV/As8puyynLlRVQ/yVD9nzP4GfoRi4ASJBaWxolW/PYsawV3Zo67c9QEQTtCbcAsIjbr+HMG+YAB+ioNEFCCNACmUTLuwC5P3pmRxndu/B7maxAfsbyD2xI8gkZbJmxoKRj6s2rkq8QjoASJxyU2dWa29k9gcEfGnVkq8p4jdOeWecOOG2NCbcF3IGhztR256lKxejlOwXDbqgTpDO/gzmvk41O2wXfs17JT/hpHE3GCrN/61rf2ucaAzOE2ywcNTkvDKAJKkCgiDa6rd9ycy45uztkh3+fyEhLu39vbC80i5QnSR77U2aEEaROv0Obc2lVZjMnBk0d4SSPzRxXndoUIglnEEgUk0Ue+1PJQgrSEiAh/JGaIguWV+8ULqh4XLlyAI15evUxS8KYnnnjiGtkguVnnPuX0j98kOvVxJUg9JnUpbbx3BYLUlUtCgud5obbp+1lNRiUmSwkSA0pMUsGlRd+74tnjbbyUeavLT2B4w+OPP/6zsl1GPmDQ97MkNHVxJUgdJOGE6ubcJda9d8XkOMQbkD9MskxMTIRmEd2su+FsHSpBWmIkH4ea0HtXKJrL5f4g6ZLP50Ptxmad2x68BaCbdUajwakEaQAMkquzRw5xSPTRLtLGVcr6flZbQ6cEaQKTbf3eVZPSyc7CLCIf+UYeRCS78UNsXb8IMsQmk/9zkXj0OmgxRMGjXWPNk4ePFJbSJF6Zgh/fMJauHTSezj6N0TF2BJk5cnQFv8vFd7ytQYscR2vs77OcSJV4FDyds4ZeMWg8nf3q0pXG4Rg7glhjgrv6OACsbYxDwB6MS01i2tgRJALiDtbRAxFDX+W6vsPyVBbEGhoclkR4vSVYztEYHWNNEP7Szv9lPPw6Xt/lvvVf3txY/ymWy7Ig5+5bz/cdw431aWeTqP4ROY3BMQYEGQMUtYmpRUAJktqh1Y71AwElSD9QVBupRUAJktqh1Y71AwElSD9QVBupRSDbBEntsGrH+oWAEqRfSKqdVCLQlCDvuPHG/UkTQzThRqJs6JKktU/bE+8z5JWf58aNjJ1MIk5B+0SkKUEmn/W+z/LDJAm3/VdYqqc9l6S2aVu8hr5CZfPn1UEjsuY9CcTqa0H7RKQpQYSeRhWBTCKgBBnQsKvZdCDw/wAAAP//8zR4+AAAAAZJREFUAwDhjszTS59glQAAAABJRU5ErkJggg=="
        },
        {
          "id": "site-1757495557665",
          "name": "网安学院",
          "url": "https://cyber.seu.edu.cn/",
          "description": "光の根据地",
          "icon": "https://wget.la/https://raw.githubusercontent.com/yyzhou94/light_nav/master/public/cs_logo.png"
        }
      ]
    },
    {
      "id": "dev-tools",
      "name": "科研工作",
      "icon": "🛠️",
      "order": 1,
      "sites": [
        {
          "id": "site-1757497852836",
          "name": "Google Scholar",
          "url": "https://scholar.google.com/",
          "description": "站在巨人的肩膀上",
          "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/1024px-Google_Scholar_logo.svg.png"
        },
        {
          "id": "site-1757497874306",
          "name": "DBLP",
          "url": "https://dblp.uni-trier.de/",
          "description": "计算机类英文文献检索数据库",
          "icon": "https://dblp.org/img/dblp.icon.192x192.png"
        },
        {
          "id": "site-1757512573385",
          "name": "arXiv",
          "url": "https://arxiv.org",
          "description": "预印论文点这里",
          "icon": "https://www.google.com/s2/favicons?domain=https://arxiv.org&sz=64"
        },
        {
          "id": "site-1757643616491",
          "name": "ResearchGate",
          "url": "https://www.researchgate.net/",
          "description": "下载不到的论文直接找作者要",
          "icon": "https://www.researchgate.net/favicon.ico"
        },
        {
          "id": "site-1757644828703",
          "name": "IEEE Xplore",
          "url": "https://ieeexplore.ieee.org/Xplore/home.jsp",
          "description": "IEEE论文点这里",
          "icon": "https://www.google.com/s2/favicons?domain=www.ieee.org&sz=64"
        },
        {
          "id": "site-1757645131517",
          "name": "ACM Digital Library",
          "url": "https://dl.acm.org/",
          "description": "ACM论文点这里",
          "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1920px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png"
        },
        {
          "id": "site-1757645220919",
          "name": "Nature",
          "url": "https://www.nature.com/",
          "description": "Nature论文看个乐",
          "icon": "https://www.google.com/s2/favicons?domain=www.nature.com&sz=64"
        },
        {
          "id": "site-1757511883821",
          "name": "中国知网",
          "url": "https://www.cnki.net/",
          "description": "中文论文点这里",
          "icon": "https://www.aigc.cn/wp-content/uploads/2023/12/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20231201120020.jpg"
        },
        {
          "id": "site-1757511745318",
          "name": "中国专利公布公告",
          "url": "http://epub.cnipa.gov.cn",
          "description": "专利检索点这里",
          "icon": "https://tysf.cponline.cnipa.gov.cn/am/img/logo%20-%20header.da3410d0.png"
        },
        {
          "id": "site-1757492914328",
          "name": "全球网络测量",
          "url": "https://measure.cybersecur1ty.de",
          "description": "用光点亮全球",
          "icon": "/sitelogo/measurement.ico"
        },
        {
          "id": "site-1757492965019",
          "name": "学术论文配色库",
          "url": "https://color.cybersecur1ty.de",
          "description": "学术论文配色库",
          "icon": "https://wget.la/https://raw.githubusercontent.com/yyzhou94/light_nav/master/public/sitelogo/palette.ico"
        },
        {
          "id": "site-1757513111712",
          "name": "Overleaf",
          "url": "https://www.overleaf.com",
          "description": "组队写论文点这里",
          "icon": "https://images.ctfassets.net/nrgyaltdicpt/451Wbu94Q1X3M5QIk74QLL/08e42061e965fb152a329ded74cdc3ce/overleaf-o-logo-primary.svg"
        }
      ]
    },
    {
      "id": "ai-tools",
      "name": "AI智能",
      "icon": "🤖",
      "order": 2,
      "sites": [
        {
          "id": "chatgpt",
          "name": "ChatGPT",
          "url": "https://chat.openai.com",
          "description": "OpenAI对话AI助手",
          "icon": "/sitelogo/chat.openai.com.ico"
        },
        {
          "id": "claude",
          "name": "Claude",
          "url": "https://claude.ai",
          "description": "Anthropic AI助手",
          "icon": "/sitelogo/claude.ai.ico"
        },
        {
          "id": "copilot",
          "name": "GitHub Copilot",
          "url": "https://github.com/features/copilot",
          "description": "AI代码助手",
          "icon": "https://cdn.overleaf.com/img/third-party-icons/github.svg"
        },
        {
          "id": "cursor",
          "name": "Cursor",
          "url": "https://cursor.sh",
          "description": "AI代码编辑器",
          "icon": "/sitelogo/cursor.sh.ico"
        }
      ]
    },
    {
      "id": "cloud",
      "name": "云服务",
      "icon": "☁️",
      "order": 3,
      "sites": [
        {
          "id": "cloudflare",
          "name": "Cloudflare",
          "url": "https://www.cloudflare.com",
          "description": "全球CDN和网络安全服务",
          "icon": "/sitelogo/www.cloudflare.com.ico"
        },
        {
          "id": "vercel",
          "name": "Vercel",
          "url": "https://vercel.com",
          "description": "前端部署平台",
          "icon": "/sitelogo/vercel.com.ico"
        },
        {
          "id": "huawei-cloud",
          "name": "华为云",
          "url": "https://www.huaweicloud.com",
          "description": "遥遥领先！",
          "icon": "/sitelogo/www.huaweicloud.com.ico"
        },
        {
          "id": "aliyun",
          "name": "阿里云",
          "url": "https://www.aliyun.com",
          "description": "阿里巴巴是个快乐的青年",
          "icon": "/sitelogo/www.aliyun.com.ico"
        },
        {
          "id": "site-1757643954499",
          "name": "Google Cloud",
          "url": "https://cloud.google.com/",
          "description": "他家的流量是金子做的",
          "icon": "https://cloud.google.com/favicon.ico"
        },
        {
          "id": "site-1757644023506",
          "name": "Micosoft Azure",
          "url": "https://azure.microsoft.com/",
          "description": "巨硬太抠搜",
          "icon": "https://azure.microsoft.com/favicon.ico"
        },
        {
          "id": "site-1757502443881",
          "name": "Netcup",
          "url": "https://www.netcup.com/en/",
          "description": "固执、拖拉的德国佬",
          "icon": "https://netcup.cafe/system/accounts/avatars/112/710/068/814/599/782/original/de4b304b31f0b8f6.png"
        },
        {
          "id": "site-1757502722681",
          "name": "GreenCloud",
          "url": "https://greencloudvps.com/",
          "description": "爱是一道光",
          "icon": "https://pbs.twimg.com/profile_images/1707313098175250432/F4iM1Dr__400x400.jpg"
        }
      ]
    },
    {
      "id": "community",
      "name": "技术论坛",
      "icon": "👥",
      "order": 4,
      "sites": [
        {
          "id": "site-1757498796231",
          "name": "Github",
          "url": "https://github.com/",
          "description": "全球最大同性交友平台",
          "icon": "https://cdn.overleaf.com/img/third-party-icons/github.svg"
        },
        {
          "id": "52pojie",
          "name": "吾爱破解",
          "url": "https://www.52pojie.cn/",
          "description": "软件安全与破解技术论坛",
          "icon": "https://www.52pojie.cn/favicon.ico"
        },
        {
          "id": "nodeseek",
          "name": "NodeSeek",
          "url": "https://www.nodeseek.com",
          "description": "MJJ聚集地",
          "icon": "/sitelogo/www.nodeseek.com.ico"
        },
        {
          "id": "site-1757502109707",
          "name": "NodeLoc",
          "url": "https://www.nodeloc.com",
          "description": "自由、平等、友好、开放、有趣",
          "icon": "https://freex.nodeloc.com/storage/logo.webp"
        },
        {
          "id": "site-1757645518755",
          "name": "Greasy Fork",
          "url": "https://greasyfork.org",
          "description": "给你的浏览器开挂",
          "icon": "https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png"
        },
        {
          "id": "stackoverflow",
          "name": "Stack Overflow",
          "url": "https://stackoverflow.com",
          "description": "程序员问答社区",
          "icon": "/sitelogo/stackoverflow.com.ico"
        },
        {
          "id": "linuxdo",
          "name": "Linux.do",
          "url": "https://linux.do",
          "description": "Linux与开源技术社区",
          "icon": "/sitelogo/linux.do.ico"
        },
        {
          "id": "v2ex",
          "name": "V2EX",
          "url": "https://www.v2ex.com",
          "description": "创意工作者社区",
          "icon": "/sitelogo/www.v2ex.com.ico"
        }
      ]
    },
    {
      "id": "tools",
      "name": "在线工具",
      "icon": "⚙️",
      "order": 6,
      "sites": [
        {
          "id": "site-1757648310091",
          "name": "在线订阅转换工具",
          "url": "https://sub.cybersecur1ty.de/",
          "description": "【切记】低调使用",
          "icon": "https://sub.cybersecur1ty.de/favicon.ico"
        },
        {
          "id": "json-formatter",
          "name": "JSON生成器",
          "url": "https://nezhainfojson.pages.dev",
          "description": "监控数据JSON生成器",
          "icon": "https://www.json.org/favicon.ico"
        },
        {
          "id": "site-1757648714789",
          "name": "Online PDF Edit",
          "url": "https://onlinepdfedit.com/",
          "description": "在线PDF编辑器",
          "icon": "https://onlinepdfedit.com/favicon.ico"
        },
        {
          "id": "tinypng",
          "name": "TinyPNG",
          "url": "https://tinypng.com",
          "description": "图片压缩工具",
          "icon": "/sitelogo/tinypng.com.ico"
        }
      ]
    },
    {
      "id": "entertainment",
      "name": "娱乐休闲",
      "icon": "🎮",
      "order": 7,
      "sites": [
        {
          "id": "bilibili",
          "name": "哔哩哔哩",
          "url": "https://www.bilibili.com",
          "description": "鬼畜已死",
          "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98xbsbAXx6lIUNYOPyIfooASMHIfnN185Rg&s"
        },
        {
          "id": "youtube",
          "name": "YouTube",
          "url": "https://www.youtube.com",
          "description": "怀念IPv6直连的日子",
          "icon": "/sitelogo/www.youtube.com.ico"
        },
        {
          "id": "site-1757646098932",
          "name": "88看球",
          "url": "http://www.88kanqiu.at",
          "description": "看直播，我只看88看球",
          "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/210px-National_Basketball_Association_logo.svg.png"
        },
        {
          "id": "site-1757645905981",
          "name": "其乐社区",
          "url": "https://keylol.com/",
          "description": "其乐融融的游戏社区",
          "icon": "https://keylol.com/favicon.ico"
        },
        {
          "id": "site-1757644293950",
          "name": "小红书",
          "url": "https://www.xiaohongshu.com",
          "description": "集美人均年薪百万",
          "icon": "https://upload.wikimedia.org/wikipedia/commons/c/c1/XiaohongshuLOGO.png"
        },
        {
          "id": "zhihu",
          "name": "知乎",
          "url": "https://www.zhihu.com",
          "description": "注意！装逼犯出没",
          "icon": "/sitelogo/www.zhihu.com.ico"
        },
        {
          "id": "douban",
          "name": "豆瓣",
          "url": "https://www.douban.com",
          "description": "吃瓜群众聚集地",
          "icon": "/sitelogo/www.douban.com.ico"
        },
        {
          "id": "site-1757646556177",
          "name": "福利吧",
          "url": "https://fuliba.net",
          "description": "强烈【不建议】在上班时打开",
          "icon": "https://files.codelife.cc/icons/fuliba2021.net.svg"
        }
      ]
    }
  ],
  "title": "与光同程"
}
