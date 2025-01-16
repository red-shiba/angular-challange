import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule], // Hier wird das CommonModule hinzugefügt
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  posts = [
    { name: 'Mandy', image: 'assets/orange.jpg', likes: 3, isLiked: false },
    { name: 'Nadine', image: 'assets/currant.jpg', likes: 12, isLiked: true },
    { name: 'Chris', image: 'assets/banana.jpg', likes: 7, isLiked: false },
  ];

  toggleLike(post: any): void {
    post.isLiked = !post.isLiked;
    post.isLiked ? post.likes++ : post.likes--;
  }
}
