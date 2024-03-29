
import slide11 from '../assets/imgs/home/slide11.png'
import slide12 from '../assets/imgs/home/slide12.png'
import slide13 from '../assets/imgs/home/slide13.png'

import dambanner from '../assets/imgs/home/damnewbanner.png'
import dam1 from '../assets/imgs/home/dam1.png'
import dam2 from '../assets/imgs/home/dam2.png'
import dam3 from '../assets/imgs/home/dam3.png'
import vaybanner from '../assets/imgs/home/vaynewbanner.png'
import vay1 from '../assets/imgs/home/vay1.png'
import vay2 from '../assets/imgs/home/vay2.png'
import vay3 from '../assets/imgs/home/vay3.png'

const menu = [
    {
        "category"   : "Đầm",
        "path"       : "dam",  
        "collection" : [
            "Đầm công sở",
            "Đầm dạo phố",
            "Đầm dạ hội",
            "Jumpsuit",
        ],
    },
    {
        "category"   : "Phụ kiện",
        "path"       : "phukien", 
        "collection" : [
            "Túi xách",
            "Khăn",
            "Vòng cổ",
        ],
    },
    {
        "category"   : "Áo",
        "path"       : "ao", 
        "collection" : [
            "Áo sơ mi",
            "Áo vest",
            "Áo thun",
            "Áo dài",
        ],
    },
    {
        "category"   : "Quần",
        "path"       : "quan", 
        "collection" : [
            "Quần dài",
            "Quần lửng",
            "Quần short",
            "Quần jean",
        ],
    },
    {
        "category" : "Chân váy",
        "path"       : "chanvay", 
        "collection": [
            "Chân váy dài",
            "Chân váy ngắn",
        ],
    },
]

const slideData = [
    {
        "img1": slide11,
        "img2": slide12,
        "img3": slide13,
        "title": "Ngọc Điểm Nghênh Xuân",
        "des": `Đất trời chuyển giao đón nắng Xuân mới, những đóa hoa tinh khiết chờ gió Xuân đua nở chính là cảm hứng để chúng tôi giới thiệu tới phái đẹp Việt BST Áo dài Tết 2024 với tên gọi: "NGỌC ĐIỂM NGHÊNH XUÂN" , ý niệm chúc mỗi người phụ nữ diện lên mình tà Áo dài Ngọc Điểm đều "đẹp tựa hoa" - một vẻ đẹp yêu kiều, toát lên vẻ thanh tú, sang trọng không thể rời mắt.`

    },
    {
        "img1": slide11,
        "img2": slide12,
        "img3": slide13,
        "title": "Ngọc Điểm Nghênh Hạ",
        "des": `Đất trời chuyển giao đón nắng Xuân mới, những đóa hoa tinh khiết chờ gió Xuân đua nở chính là cảm hứng để chúng tôi giới thiệu tới phái đẹp Việt BST Áo dài Tết 2024 với tên gọi: "NGỌC ĐIỂM NGHÊNH XUÂN" , ý niệm chúc mỗi người phụ nữ diện lên mình tà Áo dài Ngọc Điểm đều "đẹp tựa hoa" - một vẻ đẹp yêu kiều, toát lên vẻ thanh tú, sang trọng không thể rời mắt.`
    },
    {
        "img1": slide11,
        "img2": slide12,
        "img3": slide13,
        "title": "Ngọc Điểm Nghênh Thu",
        "des": `Đất trời chuyển giao đón nắng Xuân mới, những đóa hoa tinh khiết chờ gió Xuân đua nở chính là cảm hứng để chúng tôi giới thiệu tới phái đẹp Việt BST Áo dài Tết 2024 với tên gọi: "NGỌC ĐIỂM NGHÊNH XUÂN" , ý niệm chúc mỗi người phụ nữ diện lên mình tà Áo dài Ngọc Điểm đều "đẹp tựa hoa" - một vẻ đẹp yêu kiều, toát lên vẻ thanh tú, sang trọng không thể rời mắt.`
    },
    {
        "img1": slide11,
        "img2": slide12,
        "img3": slide13,
        "title": "Ngọc Điểm Nghênh đông",
        "des": `Đất trời chuyển giao đón nắng Xuân mới, những đóa hoa tinh khiết chờ gió Xuân đua nở chính là cảm hứng để chúng tôi giới thiệu tới phái đẹp Việt BST Áo dài Tết 2024 với tên gọi: "NGỌC ĐIỂM NGHÊNH XUÂN" , ý niệm chúc mỗi người phụ nữ diện lên mình tà Áo dài Ngọc Điểm đều "đẹp tựa hoa" - một vẻ đẹp yêu kiều, toát lên vẻ thanh tú, sang trọng không thể rời mắt.`
    }
]

const newProd = [
    {
        "banner": vaybanner,
        "list" :[
            {
                "img" : vay1,
                "title" : "Chân váy ngắn dây chéo eo",
                "price": 179000,
                "url" : "/productdetail/1",
            },
            {
                "img" : vay2,
                "title" : "Quần giả váy ngắn xẻ tà trơn trẻ trung",
                "price": 165000,
                "url" : "/productdetail/1",
            },
            {
                "img" :  vay3,
                "title" : "Chân váy ngắn xếp li 1 bên có túi giả năng động, dễ thương",
                "price": 179000,
                "url" : "/productdetail/1",
            },
        ]
    },
    {
        "banner": dambanner,
        "list" : [
            {
                "img" : dam1,
                "title" : "Đầm 2 dây bèo quyến rũ nữ tính sang trọng",
                "price": 319000,
                "url" : "/productdetail/1",
            },
            {
                "img" : dam2,
                "title" : "Đầm TN nơ ngực xinh xắn đáng yêu",
                "price": 309000,
                "url" : "/productdetail/1",
            },
            {
                "img" : dam3,
                "title" : "Đầm sơ mi tay ngắn form rộng kẻ sọc xẻ lai 2 bên",
                "price": 209000,
                "url" : "/productdetail/1",
            },
        ]
    },
    {
        "banner": dambanner,
        "list" : [
            {
                "img" : dam1,
                "title" : "Đầm 2 dây bèo quyến rũ nữ tính sang trọng",
                "price": 319000,
                "url" : "/productdetail/1",
            },
            {
                "img" : dam2,
                "title" : "Đầm TN nơ ngực xinh xắn đáng yêu",
                "price": 309000,
                "url" : "/productdetail/1",
            },
            {
                "img" : dam3,
                "title" : "Đầm sơ mi tay ngắn form rộng kẻ sọc xẻ lai 2 bên",
                "price": 209000,
                "url" : "/productdetail/1",
            },
        ]
    },
]

export { menu, slideData, newProd, }