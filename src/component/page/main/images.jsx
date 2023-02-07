
import img1 from './image/first.jpg';
import img2 from './image/2.jpg';
import img3 from './image/3.jpg';
import img4 from './image/4.jpg';
import img5 from './image/5.jpg';

const img = [
    {   id : 1, 
        image :  [img1] , 
        title : '사진1', 
        desc:  ['1번 사진입니다.' ]
    },
    {   id : 2, 
        image :  [img2] , 
        title : '사진2', 
        desc: [ '2번 사진입니다.' ]
    },
    {   id : 3, 
        image :  [img3] , 
        title : '사진3', 
        desc: [ '3번 사진입니다.' ]
    },
    {   id : 4, 
        image :  [img4] , 
        title : '사진4', 
        desc: [ '4번 사진입니다.' ]
    },
    {   id : 5, 
        image :  [img5] , 
        title : '사진5', 
        desc: [ '5번 사진입니다.' ]
    },
    {   id : 6, 
        image :  [img1, img2, img3, img4, img5] , 
        title : '사진 모음', 
        desc: [ '1번 사진입니다.', '2번 사진입니다.','3번 사진입니다.','4번 사진입니다.','5번 사진입니다.' ]
    },
    {   id : 7, 
        image :  [null] , 
        title : '...', 
        desc: ['내용 추가!']
    }
]

export default img;