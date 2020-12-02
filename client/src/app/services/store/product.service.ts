import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'Motivational Poster : Perfect way to get your day started', 800, "https://images.unsplash.com/photo-1587147334659-edd7f0819a80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80"),
    new Product(2, 'Product 2', 'Crystals:They’re thought to promote the flow of good energy and help rid the body and mind of negative energy for physical and emotional benefits.', 300, "https://images.unsplash.com/photo-1551232864-0b336dcdc028?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"),
    new Product(3, 'Product 3', 'Stress Relief: A perfect book to help soothe your mind', 1200, "https://images.unsplash.com/photo-1512045482940-f37f5216f639?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"),
    new Product(4, 'Product 4', 'Adult coloring book: Color your way out of anxiety', 500, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSwfp5UTBnXnUijsAbkYXJLNUUv6R5Dj_fQ&usqp=CAU"),
    new Product(5, 'Product 5', 'Essential oil: Soothes your scalp and keeps you fresh throughout the day', 800, "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHB1cmUlMjBlc3NlbnRpYWwlMjBvaWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60"),
    new Product(6, 'Product 6', 'Stress Buster: squeeze all the stress away with anew inventive method', 150, "https://peaklife.in/wp-content/uploads/2017/09/giftsstress-ballstress-ball-jpg.jpg"),
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
}
