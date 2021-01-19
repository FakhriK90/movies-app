const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 4,
    dislikes: 1,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 2,
    dislikes: 0,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 3,
    dislikes: 1,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 6,
    dislikes: 6,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 16,
    dislikes: 2,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 11,
    dislikes: 3,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 12333,
    dislikes: 32,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 2,
    dislikes: 1,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 2,
    dislikes: 1,
    likesActive: false,
    dislikesActive: false,
    visible: true
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel maximus nunc. Sed suscipit orci in eros vestibulum interdum. Vivamus pretium id quam in tempus. Fusce pellentesque, arcu quis semper scelerisque, enim metus congue lacus, a cursus lectus elit quis lectus. In hendrerit orci accumsan, placerat est convallis, eleifend sapien. Suspendisse justo odio, aliquam in tellus id, posuere consequat diam. Aliquam erat volutpat. In non nibh iaculis, ultrices tellus a, scelerisque turpis.',
    likes: 22,
    dislikes: 12,
    likesActive: false,
    dislikesActive: false,
    visible: true
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
