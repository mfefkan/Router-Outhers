import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="">Home</a> | <a routerLink="products" [state]="{key3:'value3',key4:'value4'}">Products</a> <br />
  <router-outlet></router-outlet>
  `,
  

})
export class AppComponent {
  title = 'Router-Outhers';
}
//Angular mimarisine has olarak Route Data Passing saygalar arası verilerin daha temiz, daha okunaklı ve daha güvenli bir şekilde taşınmasına izin veren çağdaş bir yöntemdir. 
//Bunun yanında Route Parameter ve Query String yöntemlerinin ise URL'in bir parçası olarak veri taşımanın geleneksel yöntemleridir. 

//Router Event
//NavigationStart, RoutesRecognized, GuardsCheckStart, ChildActivationStart, ActivationStart, GuardsCheckEnd, ResolveStart, ActivationEnd, ResolveEnd,NavigationEnd,NavigationCancel,NavigationError

//Bu eventler yazıldığı sıra ile gerçekleşir. Router'ın farklı aşamalarındaki değişiklikleri yakalamak için kullanılırlar. Bu olaylar sayesinde yönlendirme süreci ile ilgili veri alınabilir ve başladığında veya belirli bir duruma geldiği konusunda bilgi edinilebilir. 

//Bu eventler '@/angulat/router' pathi üzerinden erişilip kullanılabilir. 
//import{Router,Event,NavigationStart,...,....}from '@angular/router'; şeklinde import edilip
//constructor içinde (private router: Router) nesnesine bu class'a OnInit arayüzünün implement edildikten sonra
// ngOnInit():void{
  //     this.router.events.subscribe((event:Event) ={
    //if(event instanceof NavigationStart)
    //Console.log('Navigation Start : ${event}')
  //})
//}

//Şeklinde kullanılabilir.