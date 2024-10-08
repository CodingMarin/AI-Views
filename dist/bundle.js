(()=>{var e={},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.rv=function(){return"1.0.5"},o.ruid="bundler=rspack@1.0.5";let a=document.querySelector(".chatbot-container"),n=document.querySelector(".chatbot-toggle-btn"),s=document.querySelector(".chatbot-toggle-icon"),c=document.querySelector(".chatbot-body"),r=document.querySelector(".chatbot-footer");document.querySelector(".chatbot-close-btn img");let d=document.querySelector(".info-request"),i=document.querySelector(".name"),l=document.querySelector(".surname"),u=document.querySelector(".continue"),m=document.querySelector(".start"),g=document.querySelector(".chat-robot"),p=document.querySelector(".info-request"),v="",y="",h="";function f(){a.classList.toggle("show"),s.classList.toggle("resize")}function L(){document.getElementById("country-code-dropdown").classList.toggle("block")}async function b(e){let t=document.getElementById("userInput"),o=e||t.value.trim();if(""!==o){let e=document.querySelector(".suggestions");g.classList.add("hide"),p.classList.add("hide"),e.classList.add("hide");let a=document.createElement("div");a.classList.add("user-message-cont");let n=document.createElement("div");n.classList.add("user-message"),n.textContent=o,a.appendChild(n);let s=document.createElement("img");s.src="./Images/Frame.png",s.alt="user image",n.classList.add("message","user-message"),a.appendChild(s),c.appendChild(a);try{let e=await S(o,v,y,h);e&&setTimeout(()=>{let t=document.createElement("div");t.classList.add("bot-message-cont");let o=document.createElement("img");o.src="./Images/chat.png",o.alt="chatbot image",t.appendChild(o);let a=document.createElement("div");a.classList.add("bot-message"),a.textContent=e,t.appendChild(a),c.appendChild(t),c.scrollTop=c.scrollHeight},1e3)}catch(e){console.log("Error sending message:",e)}t.value=""}}async function S(e,t,o,a=""){let n="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCLvJCHHYlkycpevdWSsJ5sDJA3z6tovVw",s=`
        Context: This is a landing page named AI VIews that promotes intelligent agents trained to solve sales challenges. 
        The main feature of this page is offering solutions and services related to improving sales through the use of smart agents. 
        The page also includes a call to action for users to hire an agent.

        User Information:
        Name: ${t}
        Location: ${o}
    `;a&&(s+=`
Website: ${a}`);let c=`${s}
User Question: ${e}`;try{let e=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:c}]}]})});if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return(await e.json()).candidates[0].content.parts[0].text}catch(e){console.error("Error generating content:",e)}}window.addEventListener("scroll",()=>{let e=document.querySelector(".fixed");window.scrollY>0?e.classList.add("header-scrolled"):e.classList.remove("header-scrolled")}),n.addEventListener("click",f),u.addEventListener("click",()=>{if(i.reportValidity()){v=i.value,d.textContent="Por favor, coloque su contactos";let e=document.createElement("div");e.classList.add("phone-cont"),e.innerHTML=`
            <div class="selector-cont">
                <div class="country-code-selector"></div>
            </div>
            <input type="tel" class="phone contact" placeholder="Celular..." required />
            <div class="dropdown" id="country-code-dropdown">
                <div class="dropdown-item" data-country-code="+57">
                    <img src="./Images/co.png" alt="Colombia flag" />
                    Colombia
                </div>
                <div class="dropdown-item" data-country-code="+1">
                    <img src="./Images/us.png" alt="USA flag" />
                    USA
                </div>
                <div class="dropdown-item" data-country-code="+34">
                    <img src="./Images/es.png" alt="Spain flag" />
                    Spain
                </div>
                <div class="dropdown-item" data-country-code="+351">
                    <img src="./Images/pt.png" alt="Portugal flag" />
                    Portugal
                </div>
                <div class="dropdown-item" data-country-code="+91">
                    <img src="./Images/in.png" alt="India flag" />
                    India
                </div>
                <div class="dropdown-item" data-country-code="+61">
                    <img src="./Images/jp.png" alt="Japang" />
                    Japan
                </div>
            </div>
        `,c.insertBefore(e,i),i.placeholder="Correo electr\xf3nico...",i.type="email",i.value="",l.placeholder="P\xe1gina web (Opcional)...",l.value="",u.classList.add("hide"),m.classList.add("block")}document.querySelector(".country-code-selector")?.addEventListener("click",L),document.querySelectorAll(".dropdown-item").forEach(e=>{e.addEventListener("click",e=>{(function(e,t){y=t.target.textContent,document.getElementById("country-code-dropdown").classList.remove("block"),document.querySelector(".phone").value=e})(e.target.getAttribute("data-country-code"),e)})})}),m.addEventListener("click",()=>{document.querySelector(".phone").reportValidity()&&i.reportValidity()&&(d.innerHTML=`
            Empecemos a ayudarte
            <span>Puede seleccionar una opci\xf3n o
            escribir una pregunta abajo.</span>
        `,d.classList.add("info-resize"),m.classList.add("hide"),c.innerHTML=`
            <div class="suggestions">
                <span>Precios de sus agentes</span>
                <span>Formas de contacto</span>
                <span>\xbfEn qu\xe9 canales funciona?</span>
                <span>Quiero probar sus agentes</span>
            </div>
        `,r.classList.add("show")),h=l.value,document.querySelectorAll(".suggestions span").forEach(e=>{e.addEventListener("click",e=>{b(e.target.textContent)})})}),document.querySelector(".send-btn").addEventListener("click",()=>{b()}),document.querySelector(".close-btn").addEventListener("click",f),document.querySelector(".chatbot-footer input").addEventListener("keydown",e=>{"Enter"===e.key&&b()})})();
//# sourceMappingURL=bundle.js.map