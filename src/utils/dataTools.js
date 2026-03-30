import detailImgUrl_1 from '@/assets/images/header/detail-img-1.jpg?url'
import detailImgUrl_2 from '@/assets/images/header/detail-img-2.jpg?url'
import detailImgUrl_3 from '@/assets/images/header/detail-img-3.jpg?url'
import detailImgUrl_4 from '@/assets/images/header/detail-img-4.jpg?url'
import heroItemImgUrl_1 from '@/assets/images/main/hero-item-1.jpg?URL'
import heroItemImgUrl_2 from '@/assets/images/main/hero-item-2.jpg?URL'
import heroItemImgUrl_3 from '@/assets/images/main/hero-item-3.jpg?URL'
import heroBGImgUrl_1 from '@/assets/images/main/hero-bg-1.jpg?url'
import heroBGImgUrl_2 from '@/assets/images/main/hero-bg-2.jpg?url'
import heroBGImgUrl_3 from '@/assets/images/main/hero-bg-3.jpg?url'
import heroBGVideoUrl_1 from '@/assets/videos/hero-1.mp4?URL'
import heroBGVideoUrl_2 from '@/assets/videos/hero-2.mp4?URL'
import heroBGVideoUrl_3 from '@/assets/videos/hero-3.mp4?URL'
import carouselImgUrl_1 from '@/assets/images/main/carousel-1.jpg?url'
import carouselImgUrl_2 from '@/assets/images/main/carousel-2.jpg?url'
import carouselImgUrl_3 from '@/assets/images/main/carousel-3.jpg?url'
import carouselImgUrl_4 from '@/assets/images/main/carousel-4.jpg?url'
import carouselImgUrl_5 from '@/assets/images/main/carousel-5.jpg?url'
import carouselImgUrl_6 from '@/assets/images/main/carousel-6.jpg?url'

export function getStringList(prefix = '', length) {
  return Array.from({ length }, (_el, i) => {
    return prefix + (i + 1)
  })
}

export function getNavData() {
  const navItems = [
    {
      navItemName: 'navItem-1',
      detailItems: [
        {
          detailItemName: 'selector name',
          strListOr2DStrList: ['select-1', 'select-2', 'select-3'],
        },
        {
          detailItemName: 'detailItem-1',
          strListOr2DStrList: [
            ['select-1-d-1-1', 'select-1-d-1-2', 'select-1-d-1-3'],
            ['select-2-d-1-4', 'select-2-d-1-5', 'select-2-d-1-6'],
            ['select-3-d-1-7', 'select-3-d-1-8', 'select-3-d-1-9'],
          ],
        },
        {
          detailItemName: 'detailItem-2',
          strListOr2DStrList: [
            ['select-1-d-2-1', 'select-1-d-2-2', 'select-1-d-2-3'],
            ['select-2-d-2-4', 'select-2-d-2-5', 'select-2-d-2-6'],
            ['select-3-d-2-7', 'select-3-d-2-8', 'select-3-d-2-9'],
          ],
        },
      ],
    },
    {
      navItemName: 'navItem-2',
      detailItems: [
        {
          detailItemName: 'detailItem-1',
          strListOr2DStrList: ['detailItem-1-1', 'detailItem-1-2', 'detailItem-1-3'],
        },
        {
          detailItemName: 'detailItem-2',
          strListOr2DStrList: ['detailItem-2-1', 'detailItem-2-2', 'detailItem-2-3'],
        },
      ],
    },
    {
      navItemName: 'navItem-3',
      detailItems: [
        {
          detailItemName: 'detailItem-1',
          strListOr2DStrList: [
            'detailItem-1-1',
            'detailItem-1-2',
            'detailItem-1-3',
            'detailItem-1-4',
            'detailItem-1-5',
          ],
        },
        {
          detailItemName: 'detailItem-2',
          strListOr2DStrList: [
            'detailItem-2-1',
            'detailItem-2-2',
            'detailItem-2-3',
            'detailItem-2-4',
            'detailItem-2-5',
          ],
        },
        {
          detailItemName: 'detailItem-3',
          strListOr2DStrList: [
            'detailItem-3-1',
            'detailItem-3-2',
            'detailItem-3-3',
            'detailItem-3-4',
            'detailItem-3-5',
          ],
        },
      ],
    },
  ]

  return navItems
}

export function getDetailImgUrlList() {
  return [detailImgUrl_1, detailImgUrl_2, detailImgUrl_3, detailImgUrl_4]
}

export function getHeroBGImgUrlList() {
  return [heroBGImgUrl_1, heroBGImgUrl_2, heroBGImgUrl_3]
}

export function getHeroBGVideoUrlList() {
  return [heroBGVideoUrl_1, heroBGVideoUrl_2, heroBGVideoUrl_3]
}

export function getHeroItemImgUrlList() {
  return [heroItemImgUrl_1, heroItemImgUrl_2, heroItemImgUrl_3]
}

export function getRealCardList() {
  return [
    {
      title: 'card-1',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, laboriosam? Dolorem labore placeat illum a, maxime ipsa cupiditate officia aperiam laboriosam rerum. Quidem sapiente architecto porro nulla corporis corrupti quas.',
    },
    {
      title: 'card-2',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt a nulla temporibus debitis, repellendus cumque exercitationem amet eos eveniet impedit neque facilis necessitatibus. Molestias sunt distinctio molestiae voluptates? Aperiam sunt modi ad ea labore vero rem minus perferendis, debitis distinctio a illo porro dolorem inventore?',
    },
    {
      title: 'card-3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure optio itaque et nostrum rerum magni asperiores sequi, eveniet accusamus facilis at consequuntur dolorum ullam facere explicabo soluta ab, ut pariatur exercitationem consequatur quasi nulla?',
    },
  ]
}

export function getCarouselList() {
  return [
    {
      title: 'card-1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fugit molestias! In neque vero harum!',
      imgUrl: carouselImgUrl_1,
    },
    {
      title: 'card-2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fugit molestias! In neque vero harum!',
      imgUrl: carouselImgUrl_2,
    },
    {
      title: 'card-3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fugit molestias! In neque vero harum!',
      imgUrl: carouselImgUrl_3,
    },
    {
      title: 'card-4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fugit molestias! In neque vero harum!',
      imgUrl: carouselImgUrl_4,
    },
    {
      title: 'card-5',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fugit molestias! In neque vero harum!',
      imgUrl: carouselImgUrl_5,
    },
    {
      title: 'card-6',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fugit molestias! In neque vero harum!',
      imgUrl: carouselImgUrl_6,
    },
  ]
}
