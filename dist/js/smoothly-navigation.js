"use strict";

!function () {
  var view = document.querySelector('nav.menu');
  var controller = {
    view: null,
    aTags: null,
    init: function init(view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    },
    initAnimation: function initAnimation() {
      function animate(time) {
        //告诉tween间隔多少毫秒动一次
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate); //请求动画帧率
    },
    scrollToElement: function scrollToElement(element) {
      var top = element.offsetTop;
      var currentTop = window.scrollY; //当前高度
      var targetTop = top - 80; //目标高度
      var s = targetTop - currentTop; //每次动画移动的距离 
      var coords = {
        y: currentTop
      }; // Start at (0, 0)  起始位置
      var t = Math.abs(s / 100 * 300); //求绝对值   时间
      if (t > 500) {
        t = 500;
      }
      var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.  起始位置
      .to({
        y: targetTop
      }, t) // Move to (300, 200) in 1 second.  结束位置和时间
      .easing(TWEEN.Easing.Quadratic.Inout) // Use an easing function to make the animation smooth.  缓冲类型
      .onUpdate(function () {
        //coords.y已经变了
        window.scrollTo(0, coords.y); //如何更新界面
      }).start(); // Start the tween immediately.
    },
    bindEvents: function bindEvents() {
      var _this = this;
      var aTags = this.view.querySelectorAll('nav.menu > ul > li > a');
      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          var a = x.currentTarget; //获取到用户点的a标签
          var href = a.getAttribute('href'); //'#siteAbout'  获取到a标签上写的href
          var element = document.querySelector(href);
          _this.scrollToElement(element);
        };
      }
    }
  };
  controller.init(view);
}.call();