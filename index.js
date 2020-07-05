const userCases = {
  H5: [
    {
      name: "去哪买车",
      url: "https://img12.360buyimg.com/imagetools/jfs/t1/86264/6/17262/14085/5e853fc1E4916dc43/2401d5cc93bc7f5d.png"
    },
    {
      name: "法院-预约系统",
      url: "https://img10.360buyimg.com/imagetools/jfs/t1/95390/21/17213/8248/5e853ff9Eb7c83c4f/2a489fea19267938.png"
    },
  ],
  微信小程序: [
    {
      name: "京东锦礼-酷兜",
      url: "https://img10.360buyimg.com/imagetools/jfs/t1/86468/15/17422/44454/5e853f7eE82a0c442/9ca32a1f7ba979f5.png"
    },
    {
      name: "京东锦礼-福礼",
      url: "https://img10.360buyimg.com/imagetools/jfs/t1/86468/15/17422/44454/5e853f7eE82a0c442/9ca32a1f7ba979f5.png"
    },
    {
      name: "瓮福集团-瓮福农资",
      url: "https://img11.360buyimg.com/imagetools/jfs/t1/101022/35/17227/69086/5e853f35E663bb682/615606881c235eb8.png"
    },
    {
      name: "京东物流-京源链",
      url: "https://img13.360buyimg.com/imagetools/jfs/t1/107100/22/11141/125984/5e854b9eEf5e004f8/3305dc273f4a2491.png"
    },
  ],
  移动端应用: [
    {
      name: "建设银行-劳动者港湾",
      url:
        "https://img14.360buyimg.com/imagetools/jfs/t1/105533/38/17348/89840/5e85438fEe7cbc316/6c8b31c74b57f72d.png"
    },
    {
      name: "京东PLUS会员",
      url: "http://img12.360buyimg.com/img/jfs/t1/67481/15/565/28110/5cec9234E71c47244/dc4cf353fd96922e.png"
    },
    {
      name: "澳际-小希",
      url:
        "http://www.aoji.cn/static/images/index/qr-code.gif"
    },
    {
      name: "京东-慧采",
      url:
        "https://img12.360buyimg.com/imagetools/jfs/t1/107706/37/11250/21227/5e8544c6Ef0a5ebe5/8abc50023a56b5ae.png"
    },
    {
      name: "京东-丰客多", 
      url:
        "https://img10.360buyimg.com/imagetools/jfs/t1/102764/3/17238/19608/5e8545faE20d04854/dd8f64b260302278.png"
    } 
  ]
};

function chunkArray(ary) {
  const tempAry = [];
  const MAX_COLUMN = 6;
  for (let i = 0; i < ary.length; i += MAX_COLUMN) {
    tempAry.push(ary.slice(i, i + MAX_COLUMN));
  }
  if (tempAry[0].length < MAX_COLUMN) {
    tempAry[0].push(...Array(MAX_COLUMN - tempAry[0].length).fill({}));
  }
  return tempAry;
}

function renderCases(cases) {
  var navhtml = Object.keys(cases).map(key => {
    return `<a href='#${key}'>${key}<span>(${cases[key].length})</span></a>`
  }).join('')
  navhtml = `<div class='grid_c1 app_nav'>${navhtml}</div>`

  var casehtml =  Object.keys(cases)
    .map(key => {
      return `
      <h2 id=${key}>${key}</h2>
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
      >
      <tbody>
        ${renderTr(cases[key])}
      </tbody>
      </table>
    `;
    })
    .join("");
  return navhtml + casehtml
}

function renderTr(arr) {
  return chunkArray(arr)
    .map(a => {
      return `<tr>
        ${a
          .map(o => {
            return `<td align="center">
                  <img class="${
                    o.url ? "" : "hidden"
                  }" height="80" width="80" src="${o.url}" />
                  <p class="${o.url ? "" : "hidden"}">${o.name}</p>
                </td>`;
          })
          .join("")}
      </tr>
    `;
    })
    .join(""); 
}
document.getElementById("app").innerHTML = renderCases(userCases);
