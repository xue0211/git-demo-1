"use strict";

!function () {
  //为了避免声明全局变量，我们使用立即执行函数
  //添加 offset 类
  var specialTags = document.querySelectorAll('[data-x]'); //获取页面关键标签，用data-x标记
  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
  }

  //使“关于”这一栏一打开页面就跳动
  setTimeout(function () {
    findClosestAndRemoveOffset();
  }, 2000);

  //导航栏下拉变色动效
  window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset();
  });

  // helper
  function findClosestAndRemoveOffset() {
    //到达指定模块，导航栏相应a高亮
    var specialTags = document.querySelectorAll('[data-x]'); //获取页面关键标签，用data-x标记
    var minIndex = 0;
    for (var _i = 1; _i < specialTags.length; _i++) {
      //console.log('specialTags[i].offsetTop')
      //console.log(specialTags[i].offsetTop)
      if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = _i;
      } //遍历标签，看哪个离当前滚动高度最近，获取其index
    }
    //minIndex 就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset');
    //console.log(minIndex)
    /* for(let i=0; i<specialTags.length; i++){
         specialTags[i].classList.remove('active')
     }*/
    //specialTags[minIndex].classList.add('active')
    var id = specialTags[minIndex].id;
    //console.log(id)
    var a = document.querySelector('a[href="#' + id + '"]');
    // id == 'siteAbout'   'a[href="#siteAbout"]'
    var li = a.parentNode;
    var brotherAndMe = li.parentNode.children;
    for (var _i2 = 0; _i2 < brotherAndMe.length; _i2++) {
      brotherAndMe[_i2].classList.remove('highlight');
    }
    li.classList.add('highlight');
    //console.log(li)
  }
  var liTags = document.querySelectorAll('nav.menu > ul > li'); //下拉菜单
  /*console.log(liTags)*/
  for (var _i3 = 0; _i3 < liTags.length; _i3++) {
    liTags[_i3].onmouseenter = function (x) {
      /*console.log('onmouseenter')*/
      /*console.log(x.target)   //用户操作的元素*/
      /*console.log(x.currentTarget)  //我们监听的元素  */
      x.currentTarget.classList.add('active');
      /*console.log(a.nextSibling.nextSibling)*/
      //let brother = li.getElementsByTagName('ul')[0]        //怎么找li的节点弟弟
      /*while (brother.tagName !== 'UL') {
          brother = brother.nextSibling
      }*/
      /*console.log(brother)*/
      //brother.classList.add('active')
    };
    liTags[_i3].onmouseleave = function (x) {
      /*console.log('onmouseleave')*/
      x.currentTarget.classList.remove('active');
      /*console.log(a.nextSibling.nextSibling)*/
      //let brother = li.getElementsByTagName('ul')[0] 
      /*console.log(brother)*/
      //brother.classList.remove('active')
    };
  }
}.call();