const menu = [
    {
      id: 1,
      title: "Okonomiyaki",
      category: "Japon",
      price: 15,
      img:
        "https://i.nefisyemektarifleri.com/2020/08/27/okonomiyaki-lahanali-omlet-japonya.jpg",
      desc: `Olmazsa olmaz malzemesi beyaz lahana olan bu omlete isminin anlamından yola çıkarak farklı malzemeler eklenebilir. İsmi Japonya'da "neyi istersen pişir" anlamına geldiğinden, yapımına damak zevkinize uygun eklemeler yapabilirsiniz.`,
    },
    {
      id: 2,
      title: "Dumplıng",
      category: "Çin",
      price: 20,
      img:
        "https://i.nefisyemektarifleri.com/2018/10/15/dumpling-cin-mantisi-600x400.jpg",
      desc: `Yöresel Çin mantısı dumpling, iç harcı ve farklı kapatma şekli ile Türk mantısı sevenlerin dikkatini çekecek bir tarif.  `,
    },
    {
      id: 3,
      title: " Gohan",
      category: "Japon",
      price: 18,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Gohan, Japon mutfağında yağsız ve tuzsuz bir şekilde pişirilen pirincin adıdır.`,
    },
    {
      id: 4,
      title: "Bugogi",
      category: "Kore",
      price: 31,
      img:
        "https://i.nefisyemektarifleri.com/2023/01/13/geleneksel-kore-yemekleri-sira-disi-10-lezzet-7.jpg",
      desc: `Kore’nin güveçte et yemeği olarak tanıtacağımız bulgogi, yoğun sarımsak ve sosla hazırlanıyor. `,
    },
    {
      id: 5,
      title: "Kımbap",
      category: "Kore",
      price: 1000,
      img:
        "https://i.nefisyemektarifleri.com/2020/11/16/kimbap-kore-sushi-si.jpg",
      desc: `Kendi mutfağınızda Kore sushisi hazırlamak nasıl fikir? Gimbap ismiyle de bilinen bu Asya yiyeceği, gim adı verilen kurutulmuş deniz yosunlarına sarılarak yapılıyor.`,
    },
    {
      id: 6,
      title: " Çin Böreği ",
      category: "Çin",
      price: 'Free',
      img:
        "https://i.nefisyemektarifleri.com/2020/11/07/cin-boregi-chinese-spring-rolls-with-surimi-1.jpg",
      desc: `Çin Böreği, iç harcında kullanılan malzemelerin çeşidine göre vejetaryen olarak da hazırlanabilen bir yiyecek.`,
    },
  ];
  
  const section = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();
  