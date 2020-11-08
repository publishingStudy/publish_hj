//#222222
//#358EB5
//#D77847
//#F3ADAC
//#2EA68A

const img_list = document.querySelector('#img_list');
const imgs = document.querySelectorAll('.img');
const img_1 = document.querySelector('#img_1');
const img_2 = document.querySelector('#img_2');
const img_3 = document.querySelector('#img_3');
const img_4 = document.querySelector('#img_4');
const img_5 = document.querySelector('#img_5');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_left_2 = document.querySelector('#left_2');
const btn_right_2 = document.querySelector('#right_2');
const color_div = document.querySelector('#color_div');
const page_number = document.querySelector('#page_number');
const text_1 = document.querySelector('#text_1');
const text_2 = document.querySelector('#text_2');
const text_3 = document.querySelector('#text_3');


const img_len = imgs.length; //5
var img_width;
if(window.innerWidth > 1080){
    img_width = 680;
}
else if(window.innerWidth <= 1080 && window.innerWidth > 991){
    img_width = window.innerWidth*0.65;
}
else{
    img_width = window.innerWidth;
}
const start_index = 1;

img_list.style.width = img_width * (img_len) + 'px';
//console.log(img_width);
img_1.style.width = img_width + 'px';
img_2.style.width = img_width + 'px';
img_3.style.width = img_width + 'px';
img_4.style.width = img_width + 'px';
img_5.style.width = img_width + 'px';

// 무한루프 슬라이더 만들기
// 1, 5번 이미지 복사, 앞뒤에 붙여넣기
let first_img = img_list.firstElementChild;
let last_img = img_list.lastElementChild;
let clone_first_img = first_img.cloneNode(true);
let clone_last_img = last_img.cloneNode(true);

img_list.appendChild(clone_first_img);
img_list.insertBefore(clone_last_img, img_list.firstElementChild);

let cur_index = start_index;
img_list.style.transform = "translate3d(-" + (img_width * start_index) +'px, 0px, 0px)';


btn_right.addEventListener('click', () => {
    if(cur_index <= img_len + 1){
        img_list.style.transition = 300 + 'ms';
        img_list.style.transform = 'translate3d(-' + img_width * (cur_index + 1) + 'px, 0px, 0px)';
    }
    if(cur_index == img_len){
        setTimeout(() => {
            img_list.style.transition = '0ms';
            img_list.style.transform = "translate3d(-" + img_width * start_index + 'px, 0px, 0px)';
        }, 300);
        cur_index = 0;
    }
    cur_index = cur_index + 1;
    console.log(img_width);
    change(cur_index);  
})

btn_right_2.addEventListener('click', () => {
    if(cur_index <= img_len + 1){
        img_list.style.transition = 300 + 'ms';
        img_list.style.transform = 'translate3d(-' + img_width * (cur_index + 1) + 'px, 0px, 0px)';
    }
    if(cur_index == img_len){
        setTimeout(() => {
            img_list.style.transition = '0ms';
            img_list.style.transform = "translate3d(-" + img_width * start_index + 'px, 0px, 0px)';
        }, 300);
        cur_index = 0;
    }
    cur_index = cur_index + 1;
    console.log(img_width);
    change(cur_index);  
})

btn_left.addEventListener('click', () => {
    if(cur_index >= 1){
        img_list.style.transition = 300 + 'ms';
        img_list.style.transform = 'translate3d(-' + img_width * (cur_index - 1) + 'px, 0px, 0px)';
    }
    if(cur_index == 1){
        setTimeout(() => {
            img_list.style.transition = '0ms';
            img_list.style.transform = "translate3d(-" + img_width * img_len + 'px, 0px, 0px)';
        }, 300);
        cur_index = 6;
    }
    cur_index = cur_index - 1;
    console.log(img_width);
    change(cur_index);
})

btn_left_2.addEventListener('click', () => {
    if(cur_index >= 1){
        img_list.style.transition = 300 + 'ms';
        img_list.style.transform = 'translate3d(-' + img_width * (cur_index - 1) + 'px, 0px, 0px)';
    }
    if(cur_index == 1){
        setTimeout(() => {
            img_list.style.transition = '0ms';
            img_list.style.transform = "translate3d(-" + img_width * img_len + 'px, 0px, 0px)';
        }, 300);
        cur_index = 6;
    }
    cur_index = cur_index - 1;
    console.log(img_width);
    change(cur_index);
})


const change = (cur_index) => {
    switch(cur_index){
        case 1:
            color_div.style.backgroundColor = '#222222';
            page_number.innerText = '1 / 5';
            text_1.innerText = '2030년 마침내';
            text_2.innerText = '인류 최후의 유토피아';
            text_3.innerText = '전원이 힘을 모아서 기술 중심 유토피아 건설하기';
            break;
        case 2:
            color_div.style.backgroundColor = '#358EB5';
            page_number.innerText = '2 / 5';
            text_1.innerText = '동그란 반지는';
            text_2.innerText = '고정관념이지';
            text_3.innerText = '창에 비치는 달빛을 모티브로 한 사각 반지';
            break;
        case 3:
            color_div.style.backgroundColor = '#D77847';
            page_number.innerText = '3 / 5';
            text_1.innerText = '성별에 상관없이';
            text_2.innerText = '멋진 우리는';
            text_3.innerText = '말랑과 샤이앤, 트렌스젠더입니다';
            break;
        case 4:
            color_div.style.backgroundColor = '#F3ADAC';
            page_number.innerText = '4 / 5';
            text_1.innerText = '발그레한 장미색은';
            text_2.innerText = '어떻게 만들어질까';
            text_3.innerText = '디자이너가 직접 만든 CMYK 컬러배합 맞추기';
            break;
        default:
            color_div.style.backgroundColor = '#2EA68A';
            page_number.innerText = '5 / 5';
            text_1.innerText = '500년의 폐기물보다';
            text_2.innerText = '500년의 지구를 위해';
            text_3.innerText = 'CLAP 3기에서 플라스틱Free 창작자를 찾습니다';
            break;
    }
};

$(window).resize(() => {
    if(window.innerWidth > 1080){
        img_width = 680;
        //console.log(img_width);
        img_list.style.width = img_width * (img_len) + 'px';
        img_1.style.width = img_width + 'px';
        img_2.style.width = img_width + 'px';
        img_3.style.width = img_width + 'px';
        img_4.style.width = img_width + 'px';
        img_5.style.width = img_width + 'px';
        img_list.firstElementChild.style.width = img_width + 'px';
        img_list.lastElementChild.style.width = img_width + 'px';
        
        img_list.style.transition = '0ms';
        img_list.style.transform = "translate3d(-" + img_width * cur_index + 'px, 0px, 0px)';

    }
    if(window.innerWidth <= 1080 && window.innerWidth > 991){
        img_width = window.innerWidth*0.65;
        //console.log("2",img_width);
        img_list.style.width = img_width * (img_len) + 'px';
        img_1.style.width = img_width + 'px';
        img_2.style.width = img_width + 'px';
        img_3.style.width = img_width + 'px';
        img_4.style.width = img_width + 'px';
        img_5.style.width = img_width + 'px';
        img_list.firstElementChild.style.width = img_width + 'px';
        img_list.lastElementChild.style.width = img_width + 'px';
        
        img_list.style.transition = '0ms';
        img_list.style.transform = "translate3d(-" + img_width * cur_index + 'px, 0px, 0px)';

    }
    if(window.innerWidth <= 991){
        img_width = window.innerWidth;
        //console.log("3",window.outerWidth);
        img_list.style.width = img_width * (img_len) + 'px';
        img_1.style.width = img_width + 'px';
        img_2.style.width = img_width + 'px';
        img_3.style.width = img_width + 'px';
        img_4.style.width = img_width + 'px';
        img_5.style.width = img_width + 'px';
        img_list.firstElementChild.style.width = img_width + 'px';
        img_list.lastElementChild.style.width = img_width + 'px';
        
        img_list.style.transition = '0ms';
        img_list.style.transform = "translate3d(-" + img_width * cur_index + 'px, 0px, 0px)';
    }
}
)