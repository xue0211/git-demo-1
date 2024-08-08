!function () {//为了避免声明全局变量，我们使用立即执行函数
    //添加 offset 类
    let specialTags = document.querySelectorAll('[data-x]')//获取页面关键标签，用data-x标记
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    //使“关于”这一栏一打开页面就跳动
    setTimeout(function () {
        findClosestAndRemoveOffset()
    }, 2000)

     //导航栏下拉变色动效
    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffset()
    }) 


    // helper
    function findClosestAndRemoveOffset() {  //到达指定模块，导航栏相应a高亮
        let specialTags = document.querySelectorAll('[data-x]')//获取页面关键标签，用data-x标记
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            //console.log('specialTags[i].offsetTop')
            //console.log(specialTags[i].offsetTop)
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }//遍历标签，看哪个离当前滚动高度最近，获取其index
        }
        //minIndex 就是离窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset')
        //console.log(minIndex)
        /* for(let i=0; i<specialTags.length; i++){
             specialTags[i].classList.remove('active')
         }*/
        //specialTags[minIndex].classList.add('active')
        let id = specialTags[minIndex].id
        //console.log(id)
        let a = document.querySelector('a[href="#' + id + '"]')
        // id == 'siteAbout'   'a[href="#siteAbout"]'
        let li = a.parentNode
        let brotherAndMe = li.parentNode.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
        //console.log(li)
    }


    let liTags = document.querySelectorAll('nav.menu > ul > li')//下拉菜单
    /*console.log(liTags)*/
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            /*console.log('onmouseenter')*/
            /*console.log(x.target)   //用户操作的元素*/
            /*console.log(x.currentTarget)  //我们监听的元素  */
            x.currentTarget.classList.add('active')
            /*console.log(a.nextSibling.nextSibling)*/
            //let brother = li.getElementsByTagName('ul')[0]        //怎么找li的节点弟弟
            /*while (brother.tagName !== 'UL') {
                brother = brother.nextSibling
            }*/
            /*console.log(brother)*/
            //brother.classList.add('active')
        }
        liTags[i].onmouseleave = function (x) {
            /*console.log('onmouseleave')*/
            x.currentTarget.classList.remove('active')
            /*console.log(a.nextSibling.nextSibling)*/
            //let brother = li.getElementsByTagName('ul')[0] 
            /*console.log(brother)*/
            //brother.classList.remove('active')
        }
    }
}.call()
