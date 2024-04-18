// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的姑娘",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第三个生日！",
        "这两年来，我见过你",
        "奇怪的样子",
        "可爱的样子",
        "生气的样子",
        "都是我喜欢的样子",
        "对了，礼物收全了吗？",
        "今年要吃好好的",
        "喂饱饱的",
        "然后才有力气干活",
        "和想我！",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "songxinxin.jpeg",
        "心爱的姑娘": "nothing.jpg",
        "今天是你的生日": "shengri.jpeg",
        "这是我们在一起的": "zaiyiqi.png",
        "第三个生日！": "nothing.jpg",
        "这两年来，我见过你": "yangzi.jpeg",
        "奇怪的样子": "nothing.jpg",
        "可爱的样子": "nothing.jpg",
        "生气的样子": "nothing.jpg",
        "都是我喜欢的样子": "nothing.jpg",
        "对了，礼物收全了吗？": "chuo.gif",
        "今年要吃好好的": "chihaodian.jpeg",
        "喂饱饱的": "weibao.jpeg",
        "然后才有力气干活": "nothing.jpg",
        "和想我！": "nothing.jpg",
        "生日快乐~~": "nothing.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Heloooo",
        play: "Memutar Musik yuk",
        bannar_coming: "Mulai yaa..",
        balloons_flying: "Mau lagi kejutannya??",
        cake_fadein: "Mau Kue?",
        light_candle: "Mau Hidupin Lilinnya?",
        wish_message: "Yeeeee... Selamat ulang tahun~",
        story: "Ini Ucapan Abi untuk Bunda juga Khaira"
    },

    // 结束语
    loveText: 'I See U~'
};
