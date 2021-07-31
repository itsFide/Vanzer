$(function(){
    let scrollItem = document.querySelectorAll('.scroll-item');
    scrollItem.forEach(function(e){
        e.addEventListener('click',function(){
            scrollItem.forEach(function(item){
                item.classList.remove('active')
            })
            e.classList.add('active')
            
        })
        
    })

});
// Tabs
let tabBtn = document.querySelectorAll('.tabs-title');
let tabItems = document.querySelectorAll('.tabs-item');
tabBtn.forEach(function(e){
    
    e.addEventListener('click',function(){
        let currentBtn = e;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector('#' + tabId);
        tabBtn.forEach(function(event){
            event.classList.remove('active');
        })
        tabItems.forEach(function(event){
            event.classList.remove('active');
        })
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        
    })
    
})
// portolio tabs
let portfolioTabBtn = document.querySelectorAll('.portfolio-tabs-title');
let portfolioTabItems = document.querySelectorAll('.portfolio-tabs-content');
portfolioTabBtn.forEach(function(e){
    
    e.addEventListener('click',function(){
        let currentBtn = e;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector('#' + tabId);
        portfolioTabBtn.forEach(function(event){
            event.classList.remove('active');
        })
        portfolioTabItems.forEach(function(event){
            event.classList.remove('active');
        })
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        
    })
    
})