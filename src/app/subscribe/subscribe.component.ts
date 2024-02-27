import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css',
})
export class SubscribeComponent {
  menuItems: {
    label: string;
    class: string;
  }[] = [
    { label: 'Mugdha', class: 'fa-solid fa-sun' },
    { label: 'Shopping', class: 'fa-solid fa-house' },
    { label: 'Music', class: 'fa-solid fa-house' },
    { label: 'Movies', class: 'fa-solid fa-house' },
    { label: 'Live', class: 'fa-solid fa-house' },
    { label: 'Gaming', class: 'fa-solid fa-house' },
    { label: 'Music', class: 'fa-solid fa-house' },
  ];

  headerMenuItems: {
    label: string;
    isActive: boolean;
  }[] = [
    { label: 'All', isActive: true },
    { label: 'Music', isActive: false },
    { label: 'Bollywood Music', isActive: false },
    { label: 'Chill-out music', isActive: false },
    { label: 'Animated films', isActive: false },
    { label: 'Dramedy', isActive: false },
    { label: 'Tamil Cinema', isActive: false },
    { label: 'Mantras', isActive: false },
  ];
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
      isSubscribed: true,
    },
  ];
}
