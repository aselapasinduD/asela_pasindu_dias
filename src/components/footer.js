//footer section
import React from "react";

import './styles/footer_quick_email.css'

const Footer = () => {
    const peoperPerHourHtml = `
        <!--
        PeoplePerHour Profile Widget
        The div#pph-hire me is the element
        where the iframe will be inserted.
        You may move this element wherever
        you need to display the widget
        -->
        <div id="pph-hireme"></div>
        <script type="text/javascript">
        (function(d, s) {
            var useSSL = 'https:' == document.location.protocol;
            var js, where = d.getElementsByTagName(s)[0],
            js = d.createElement(s);
            js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/801905547/5255612.js?width=245&height=320&orientation=vertical&theme=dark&rnd='+parseInt(Math.random()*10000, 10);
            try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }
        }(document, 'script'));
        </script>
    `;

    return (
        <footer id="footer" data-testid="footer" className=" sections Footer ">
            <hr className=" border-[#FF6600] my-2 " />
            <div className=" flex flex-1 my-5 text-left text-[18px] ">
                <ul className=" flex-1 ">
                    <li>asela.pasindu.dias17@gmail.com</li>
                    <li>Telephone - 0789991578 - 8am : 6pm</li>
                    <li><div dangerouslySetInnerHTML={{__html: peoperPerHourHtml}}></div></li>
                </ul>
                <ul className=" flex-1 ">
                    <li>English - Professional</li>
                    <li>Sinhala - Native or Bilingual</li>
                    <li>Korean - Elementary</li>
                </ul>
                <form className= " quickEmail relative flex flex-col space-y-[10px] ">
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        className=" w-[320px] h-[46px] border-2 border-[#FF6600] rounded-[20px] p-[10px] placeholder:text-center"
                        placeholder="Full Name" required/>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className=" w-[320px] h-[46px] border-2 border-[#FF6600] rounded-[20px] p-[10px] placeholder:text-center"
                        placeholder="Email" required/>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{10}"
                        className=" w-[320px] h-[46px] border-2 border-[#FF6600] rounded-[20px] p-[10px] placeholder:text-center"
                        placeholder="Phone Number: 0123456789" />
                    <textarea
                        id="message"
                        name="message"
                        className=" w-[320px] h-[200px] border-2 border-[#FF6600] rounded-[20px] p-[10px] "
                        placeholder="Quick Email" required></textarea>
                    <button 
                        type="submit"
                        value="Submit"
                        className=" quickEmailSubmitButton text-black w-max border-2 border-[#FF6600] bg-[#FF6600] rounded-[20px] p-1 px-10 font-semibold ">
                            Submit
                    </button>
                </form>
            </div>
            <hr className=" border-[#FF6600] my-2 " />
            <div className=" relative mb-2">
                <p className=" text-center text-[15px] ">© 2024 Asela Pasindu Dias All rights reserved.<br/>Developed by VEBDRAKstudio.</p>
                <p className=" absolute top-0 right-0 text-[12px]">Last Update - 2024-01 - 0.2v</p>
            </div>
            
        </footer>
    );
}

export default Footer;

