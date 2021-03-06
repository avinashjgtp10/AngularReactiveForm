import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states,Address, Hero } from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroForm:FormGroup;
  states=states;
  hero=Hero;

  powers=[
    "Flight",
    "X-ray vision",
    "Strength"
  ];
  constructor( private fb:FormBuilder ) {
    this.createForm();
    console.log(Hero);
   }

  ngOnInit() {
  }

  // this.heroForm.setValue({
  //   name:    this.hero.name,
  //   address: this.hero.addresses[0] || new Address()
  // });

  // this.heroForm.patchValue({
  //   name: this.hero.name
  // });
  
  createForm(){
    this.heroForm=this.fb.group({
      name: ['',Validators.required],
      address: this.fb.group(new Address()), 
      power: '',
      sidekick: ''
    });
  }


}
