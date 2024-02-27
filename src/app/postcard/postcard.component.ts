import { Component } from '@angular/core';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrl: './postcard.component.css',
})
export class PostcardComponent {
  videoDetails: {
    imageUrl: string;
    userProfileLink: string;
    title: string;
    channelName: string;
    views: string;
    daysAgo: string;
    isSubscribed: boolean;
  }[] = [
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: true,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: false,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: true,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: false,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: false,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: true,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: true,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: true,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: true,
    },
    {
      imageUrl:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      userProfileLink:
        'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_1280.png',
      title: 'How to Make a website using HTML CSS and javascript',
      channelName: 'Coding Easy',
      views: '15k',
      daysAgo: '3 days ago',
      isSubscribed: false,
    },
  ];
}
