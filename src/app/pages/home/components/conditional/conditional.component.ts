import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-conditional',
  imports: [NgOptimizedImage],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.scss',
})

export class ConditionalComponent {
  users = [
    {
      id: 1,
      name: 'Mazher Hussain',
      userDetail: {
        email: 'mazher@example.com',
        role: 'Admin',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      },
    },
    {
      id: 2,
      name: 'Abdul Hanan',
      userDetail: {
        email: 'hanan@example.com',
        role: 'User',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      },
    },
    {
      id: 3,
      name: 'Michelle Fatima',
      userDetail: {
        email: 'michelle@example.com',
        role: 'Editor',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      },
    },
    {
      id: 4,
      name: 'Muneeb',
      userDetail: {
        email: 'muneeb@example.com',
        role: 'Moderator',
        image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      },
    },
    {
      id: 5,
      name: 'Abiha Azhar',
      userDetail: {
        email: 'abiha@example.com',
        role: 'Content Creator',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      },
    },
    {
      id: 6,
      name: 'Ayesha Khan',
      userDetail: {
        email: 'ayesha@example.com',
        role: 'Designer',
        image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
      },
    },
    {
      id: 7,
      name: 'Bilal Ahmed',
      userDetail: {
        email: 'bilal@example.com',
        role: 'Developer',
        image: 'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg',
      },
    },
    {
      id: 8,
      name: 'Sarah Sheikh',
      userDetail: {
        email: 'sarah@example.com',
        role: 'Project Manager',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      },
    },
  ];
  

  userInfo: { email: string;role:string; image: string } | null = null;

  showUserInfo(id: number) {
    const selectedUser = this.users.find((user) => user.id == id);
    if(selectedUser){
      this.userInfo={
        email:selectedUser.userDetail.email,
        role:selectedUser.userDetail.role,
        image:selectedUser.userDetail.image,

      }
    }
    }
    hideUserInfo(id:number){
      this.userInfo=null;
    }
    
  }

