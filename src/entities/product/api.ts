import type {Product} from './model.ts'

export const fetchProducts = async (): Promise<Product[]> => {
    //заменить на axios
    return Promise.resolve([
        {
            id: '1',
            title: 'iPhone 15 Pro',
            description: '256 GB, Titanium\nA17 Pro chip, Dynamic Island, ProMotion display, Ceramic Shield front, aerospace-grade titanium design, Pro camera system with 48MP Main camera',
            price: 129990,
            image: 'https://basket-14.wbbasket.ru/vol2147/part214799/214799013/images/big/1.webp'
        },
        {
            id: '2',
            title: 'AirPods Pro',
            description: '2nd generation\nActive Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio, sweat and water resistant, MagSafe Charging Case',
            price: 24990,
            image: 'https://avatars.mds.yandex.net/get-mpic/5235429/2a0000018a2c4971410f87a1a715dd368bf0/orig'
        },
        {
            id: '3',
            title: 'iPhone 16 Pro',
            description: '256 GB, Titanium\nA18 Pro chip, enhanced Thermal Design, Capture button, larger displays, advanced 48MP camera system with 5x Telephoto',
            price: 149990,
            image: 'https://avatars.mds.yandex.net/get-mpic/4554655/2a00000191dc89f5c7d859750edbf0e15c10/orig'
        },
        {
            id: '4',
            title: 'iPhone 17',
            description: '128 GB, Pink\nA19 chip, All-screen design, improved battery life, enhanced camera system with computational photography, ceramic shield front',
            price: 189990,
            image: 'https://www.iguides.ru/upload/iblock/6f8/yb4yodv23a1wdwxkerhczbjr71opft91.png'
        },
        {
            id: '5',
            title: 'iPhone 17 Pro',
            description: '256 GB, Orange\nA19 Pro chip, tetraprism telephoto camera, customizable Action button, ProMotion with Always-On display, titanium and ceramic build',
            price: 219990,
            image: 'https://avatars.mds.yandex.net/get-mpic/16479068/2a000001996ca1350e93e8ff833cd29e1fc2/orig'
        },
        {
            id: '6',
            title: 'iPhone 1',
            description: 'Best phone\nOriginal iPhone with 3.5-inch display, 2MP camera, multi-touch interface, iPod integration, revolutionary mobile experience',
            price: 879990,
            image: 'https://i.pinimg.com/originals/d6/7e/64/d67e64c864c0ce02bc41e94c7cb734b7.jpg'
        }
    ])
}
