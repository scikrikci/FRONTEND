const leftbar = document.querySelector(".left-bar");
const allLi = document.querySelectorAll("li");

const rightBar = document.querySelector(".right-bar");
const h1Text = document.querySelector(".title");
const textparagraph = document.querySelector(".text");

allLi.forEach((li, index) => {
    // console.log(index);
    li.addEventListener("click", function(e){
        e.preventDefault();
        console.log(index);

        
        leftbar.querySelector(".active").classList.remove("active");
        li.classList.add("active");
        
        leftbar.querySelector(".whitecolor").classList.remove("whitecolor");
        li.classList.add("whitecolor");

        if(index === 0){
            console.log("0");
            h1Text.textContent="Home";
            textparagraph.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dignissimos repellendus quod voluptate nam, deleniti maxime, eligendi reiciendis molestias consequuntur nobis, magnam facilis vero temporibus culpa possimus porro quos nihil odit dolor beatae eaque dolorum quam? Modi pariatur quis voluptate ea cum ullam deserunt nostrum. Quaerat laborum sequi nemo aut, praesentium dolor accusantium similique quod? Sit asperiores cupiditate voluptatibus aperiam quibusdam facilis sequi, similique, vero consectetur corporis qui tempore est mollitia, quidem quasi nihil commodi expedita! Voluptates sit voluptatem ad? Facere, at voluptatibus beatae in nihil porro laudantium exercitationem dolores tenetur deleniti. Porro aliquam neque quia officiis itaque nulla corrupti?";
        }
        
        if(index === 1){
            console.log("1");
            h1Text.textContent="Blog";
            textparagraph.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dignissimos repellendus quod voluptate nam, deleniti maxime, eligendi reiciendis molestias consequuntur nobis, magnam facilis vero temporibus culpa possimus porro quos nihil odit dolor beatae eaque dolorum quam? Modi pariatur quis voluptate ea cum ullam deserunt nostrum. Quaerat laborum sequi nemo aut, praesentium dolor accusantium similique quod? Sit asperiores cupiditate voluptatibus aperiam quibusdam facilis sequi, similique, vero consectetur corporis qui tempore est mollitia, quidem quasi nihil commodi expedita! Voluptates sit voluptatem ad? Facere, at voluptatibus beatae in nihil porro laudantium exercitationem dolores tenetur deleniti. Porro aliquam neque quia officiis itaque nulla corrupti?";
        }
        
        if(index === 2){
            console.log("2");
            h1Text.textContent="Help";
            textparagraph.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dignissimos repellendus quod voluptate nam, deleniti maxime, eligendi reiciendis molestias consequuntur nobis, magnam facilis vero temporibus culpa possimus porro quos nihil odit dolor beatae eaque dolorum quam? Modi pariatur quis voluptate ea cum ullam deserunt nostrum. Quaerat laborum sequi nemo aut, praesentium dolor accusantium similique quod? Sit asperiores cupiditate voluptatibus aperiam quibusdam facilis sequi, similique, vero consectetur corporis qui tempore est mollitia, quidem quasi nihil commodi expedita! Voluptates sit voluptatem ad? Facere, at voluptatibus beatae in nihil porro laudantium exercitationem dolores tenetur deleniti. Porro aliquam neque quia officiis itaque nulla corrupti?";
        }
        
        if(index === 3){
            console.log("3");
            h1Text.textContent="Code";
            textparagraph.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dignissimos repellendus quod voluptate nam, deleniti maxime, eligendi reiciendis molestias consequuntur nobis, magnam facilis vero temporibus culpa possimus porro quos nihil odit dolor beatae eaque dolorum quam? Modi pariatur quis voluptate ea cum ullam deserunt nostrum. Quaerat laborum sequi nemo aut, praesentium dolor accusantium similique quod? Sit asperiores cupiditate voluptatibus aperiam quibusdam facilis sequi, similique, vero consectetur corporis qui tempore est mollitia, quidem quasi nihil commodi expedita! Voluptates sit voluptatem ad? Facere, at voluptatibus beatae in nihil porro laudantium exercitationem dolores tenetur deleniti. Porro aliquam neque quia officiis itaque nulla corrupti?";
        }

        if(index === 4){
            console.log("4");
            h1Text.textContent="About";
            textparagraph.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dignissimos repellendus quod voluptate nam, deleniti maxime, eligendi reiciendis molestias consequuntur nobis, magnam facilis vero temporibus culpa possimus porro quos nihil odit dolor beatae eaque dolorum quam? Modi pariatur quis voluptate ea cum ullam deserunt nostrum. Quaerat laborum sequi nemo aut, praesentium dolor accusantium similique quod? Sit asperiores cupiditate voluptatibus aperiam quibusdam facilis sequi, similique, vero consectetur corporis qui tempore est mollitia, quidem quasi nihil commodi expedita! Voluptates sit voluptatem ad? Facere, at voluptatibus beatae in nihil porro laudantium exercitationem dolores tenetur deleniti. Porro aliquam neque quia officiis itaque nulla corrupti?";
        }
    });
});
