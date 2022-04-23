const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Posuere urna nec tincidunt praesent semper. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mi proin sed libero enim.',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_content: 'Amet commodo nulla facilisi nullam vehicula ipsum a arcu.',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        post_content: 'Et pharetra pharetra massa massa. Arcu non odio euismod lacinia at.',
        user_id: 4
    },
    {
        title: 'Pellentesque eget nunc.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_content: 'Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Egestas fringilla phasellus faucibus scelerisque.',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_content: 'Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Eu non diam phasellus vestibulum lorem sed risus ultricies.',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Purus semper eget duis at tellus at. Quam pellentesque nec nam aliquam sem. Mauris vitae ultricies leo integer. Ultricies integer quis auctor elit sed vulputate mi.',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
