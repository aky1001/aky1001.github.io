const btn = document.getElementById('button');
const shop =  document.getElementById('shop');
const shop_menu = document.getElementById('shopmenu');
const exit = document.getElementById('exitbtn');
const doubleclicks = document.getElementById('2xclicks');
const tripleclicks = document.getElementById('3xclicks');
const tenxclicks = document.getElementById('10xclicks');
const end = document.getElementById('finish');
const p = document.getElementById('p');
let i=0;
btn.addEventListener('click', () => {
    i += 1;
    if (i < 40) {
        shop.classList.add('hide');
    }
    if (doubleclicks.classList.contains('bought')) {
        i += 1;
    }
    if (tripleclicks.classList.contains('bought')) {
        i += 1;
    }
    if (tenxclicks.classList.contains('bought')) {
        i += 7;
    }
    if (i < 10) {
        btn.innerText = `PRESS MORE! (${i})`;
    } else if (i >= 10 && i <= 13) {
        btn.innerText = `you won! :D`;
    } else if (i > 13 && i < 30) {
        btn.innerText = `u can stop now... (${i})`;
    } else if  (i >= 30 && i < 35) {
        btn.innerText = `STOP IT! (${i})`;
    } else if (i  >= 35 && i < 40) {
        btn.innerText = `NOOOOOO! (${i})`;
    } else {
        shop.classList.remove('hide');
        shop.classList.add('shop');
        btn.innerText = `awh man`;
        p.innerText = `Hello! Your presses are: ${i}`;
        document.getElementById("shop").innerText = `Go to shop!`;
        shop.addEventListener('click', () => {
            btn.classList.add('hide');
            shop.classList.add('hide');
            p.classList.add('hide');
            exit.classList.remove('hide');
            exit.classList.add('exitbtn');
            doubleclicks.classList.remove('hide');
            doubleclicks.classList.add('doubleclicks');
            end.classList.remove('hide');
            end.classList.add('end');
            shop_menu.classList.remove('hide');
            shop_menu.classList.add('shopmenu');
            if (doubleclicks.classList.contains('bought')) {
                tripleclicks.classList.remove('hide');
                tripleclicks.classList.add('tripleclicks');
            }
            if (tripleclicks.classList.contains('bought')) {
                tenxclicks.classList.remove('hide');
                tenxclicks.classList.add('tenxclicks');
            }
            document.getElementById("shopP").innerText = `Welcome to the shop! Your clicks are ${i}`;
            exit.addEventListener('click', () => {
                btn.classList.remove('hide');
                shop.classList.remove('hide');
                p.classList.remove('hide');
                exit.classList.add('hide');
                shop_menu.classList.add('hide');
            });
            doubleclicks.addEventListener('click', () => {
                if (i >= 50) {
                    i -= 50;
                    alert("You bought double clicks! From now on, each click will count as 2 clicks.");
                    doubleclicks.classList.add('bought');
                    p.innerText = ``;
                    document.getElementById("ShopP").innerText = ``;
                }
            });
            tripleclicks.addEventListener('click', () => {
                if (i >= 100) {
                    i -= 100;
                    alert("You bought double clicks! From now on, each click will count as 3 clicks.");
                    tripleclicks.classList.add('bought');
                    p.innerText = ``;
                    document.getElementById("ShopP").innerText = ``;
                }
            });
            tenxclicks.addEventListener('click', () => {
                if (i >= 300) {
                    i -= 300;
                    alert("You bought double clicks! From now on, each click will count as 3 clicks.");
                    tenxclicks.classList.add('bought');
                    p.innerText = ``;
                    document.getElementById("ShopP").innerText = ``;
                }
            });
            end.addEventListener('click', () => {
                if (i >= 1000) {
                    alert("Congratulations! You have finished the game!");
                    btn.classList.add('hide');
                    shop.classList.add('hide');
                    p.classList.add('hide');
                    shop_menu.classList.add('hide');
                    document.getElementById("ShopP").innerText = ``;
                }
            });
            });
    }
});