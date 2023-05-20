const yearEl=document.querySelector('.year');
const currentDate=new Date();
yearEl.textContent=currentDate.getFullYear();

const menu_btn=document.querySelector('.btn-mobile-nav');
const nav=document.querySelector('header');
menu_btn.onclick = ()=>{
    nav.classList.toggle('nav-open')
};

const allLinks=document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const href=link.getAttribute('href');
        if (href==="#"){
            window.scrollTo({
                top: 0,
                behavior:"smooth",
            });
        }
        if(href!=="#" && href.startsWith("#")){
            const sectionEl=document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth"
            });
        }
        if (link.classList.contains("nav-link"))
            nav.classList.toggle('nav-open');
    });
});


const sectionHeroEl=document.querySelector('.section-hero');
const obs = new IntersectionObserver(
    function(entries){
        const ent=entries[0];
        if(!ent.isIntersecting)
            document.body.classList.add('sticky');
        if(ent.isIntersecting)
            document.body.classList.remove('sticky');
    },{
        root:null,
        threshold:0
    }
);
obs.observe(sectionHeroEl);


function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();