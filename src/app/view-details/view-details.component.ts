import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../models/product.interface';

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

@Component({
  selector: 'app-view-details',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit {
  product: Product | null = null;
  quantity: number = 1;
  reviews: Review[] = [
    { id: 1, userName: 'John Doe', rating: 5, comment: 'Excellent product! Highly recommended.', date: '2026-03-10' },
    { id: 2, userName: 'Jane Smith', rating: 4, comment: 'Good quality, fast shipping.', date: '2026-03-08' },
    { id: 3, userName: 'Mike Johnson', rating: 5, comment: 'Best purchase ever!', date: '2026-03-05' }
  ];
  newReview = { rating: 5, comment: '' };
  showReviewForm = false;

  private sampleProducts: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 45000,
      stock: 10,
      status: 'Available',
      description: 'High performance laptop for school and work with latest processor and 16GB RAM.'
    },
    {
      id: 2,
      name: 'Headphones',
      category: 'Accessories',
      price: 1500,
      stock: 25,
      status: 'Available',
      description: 'Premium noise cancelling headphones with 30-hour battery life.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '1');
      this.product = this.sampleProducts.find(p => p.id === id) || this.sampleProducts[0];
    });
  }

  addToCart() {
    if (this.product) {
      alert(`Added ${this.quantity} unit(s) of ${this.product.name} to cart`);
      this.quantity = 1;
    }
  }

  toggleReviewForm() {
    this.showReviewForm = !this.showReviewForm;
  }

  submitReview() {
    if (this.newReview.comment.trim()) {
      const review: Review = {
        id: this.reviews.length + 1,
        userName: 'You',
        rating: this.newReview.rating,
        comment: this.newReview.comment,
        date: new Date().toISOString().split('T')[0]
      };
      this.reviews.unshift(review);
      this.newReview = { rating: 5, comment: '' };
      this.showReviewForm = false;
    }
  }

  getAverageRating(): number {
    if (this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / this.reviews.length) * 10) / 10;
  }

  getRatingStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
}