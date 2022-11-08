const userCases = {
  微信小程序: [
    {
      name: "京小贷",
      url: "https://img14.360buyimg.com/imagetools/jfs/t1/207038/35/18852/91124/6221d1deE4b3a532c/27640c5cdcc2586c.jpg",
    },
    {
      name: "数智安全",
      url: "https://img10.360buyimg.com/imagetools/jfs/t1/2479/16/19293/99494/62be9f98E0cb5a395/30b582e0797be4bf.jpg",
    },
    {
      name: "前晨汽车",
      url: "https://img10.360buyimg.com/imagetools/jfs/t1/36735/5/16555/92046/62be9f10Ec45e2c8a/1c0ac9b9c3186033.jpg",
    },
    {
      name: "京东冷链",
      url: "https://img10.360buyimg.com/imagetools/jfs/t1/138263/29/23089/247877/6229adbfE06046765/4dcaf1a42590c7e4.jpg",
    },
    {
      name: "京东到店",
      url: "https://img11.360buyimg.com/imagetools/jfs/t1/207986/40/18829/52981/6221db5bEeefa46c0/2ba1aa1c94fc8059.jpg",
    },
    {
      name: "全渠道门店管理",
      url: "https://img10.360buyimg.com/imagetools/jfs/t1/118516/4/21871/52006/623d229bEa64483b5/ebee97b22af64641.jpg",
    },
  ],
  H5: [
    {
      name: "京灵平台",
      url: "https://img13.360buyimg.com/imagetools/jfs/t1/160735/28/32698/18115/6364db2bEfee03026/0906b41f9f138aae.png",
    },
    {
      name: "点宽学院",
      url: "https://img12.360buyimg.com/imagetools/jfs/t1/132733/28/28053/15981/6364db34E25c37141/0e2f9ce3061112c7.png",
    },
    {
      name: "企业年度省钱账单",
      url: "https://img14.360buyimg.com/imagetools/jfs/t1/174043/36/29180/12275/6369b521E2d9494c7/6a2e9dcf2f92db78.png"
    },
    {
      name: "京东金融-保险服务",
      url: "https://img12.360buyimg.com/imagetools/jfs/t1/136184/15/30728/24091/6369b6d9E397bfe2e/42d30873f78215c5.png"
    },
    {
      name: "京东中采云",
      url: "https://img11.360buyimg.com/imagetools/jfs/t1/182298/40/29860/16739/6369b1d6Eced6c8ad/ecbe5165685c29ed.png"
    }
  ],
  移动端应用: [
    {
      name: "京东慧采",
      url: "https://img14.360buyimg.com/imagetools/jfs/t1/85127/11/29676/21323/6364dbcaE43808690/37562b64c2086927.png",
    },
    {
      name: "建设银行-劳动者港湾",
      url: "https://img11.360buyimg.com/imagetools/jfs/t1/69212/24/22802/13533/6364dad8E21b7a6e6/ee4407a90c036c03.png",
    },
    {
      name: "澳际-小希",
      url: "https://img13.360buyimg.com/imagetools/jfs/t1/198866/9/28506/15078/6364db22E526fa6b2/96091b31b9337aa8.png",
    },
    {
      name: "京东B商城",
      url: "https://img10.360buyimg.com/imagetools/jfs/t1/112371/6/26846/6580/6364e011E74eb85eb/df66195be24e5bb1.png"
    },
    {
      name: "京东企业购",
      url: "https://img11.360buyimg.com/imagetools/jfs/t1/129240/33/27641/19803/6358d162Ebf4bf941/e644f1decabe0901.png"
    }
  ],
};

function renderCases(cases) {
  var casehtml = Object.keys(cases)
    .map((key) => {
      return `<div class="list">
      <div class="list-title">${key}</div>
      <div class="list-container">
        ${renderItem(cases[key])}
      </div>
    </div>`;
    })
    .join("");
  return casehtml;
}

function renderItem(arr) {
  return arr
    .map((a) => {
      return `
      <div class="item">
        <img src="${a.url}" alt="">
        <span class="name">${a.name}</span>
      </div>
    `;
    })
    .join("");
}
document.getElementById("app").innerHTML = renderCases(userCases);
