import { Component, AfterViewInit, ElementRef, Renderer } from '@angular/core'
import { UserHomeComponent } from '../home/user_home.component'

import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
//import * as $ from 'bootstrap/dist/js/bootstrap.min.js';
//import * as $ from 'jquery';

@Component ({
  selector: 'my-observations',
  templateUrl: 'my_observations.component.html',
  providers: [NgbDatepicker],
  styleUrls: [
    'my_observations.style.css',
    //'../user_banner.css'
  ]
})

export class MyObservationsComponent implements AfterViewInit{
  //model;
  /*constructor(config: NgbCarouselConfig) {
  // customize default values of carousels used by this component tree
      config.interval = 10000;
      config.wrap = false;
      config.keyboard = false;
    }*/


  constructor(elementRef: ElementRef, renderer: Renderer, config: NgbDatepicker) {


      // Listen to click events in the component
      renderer.listenGlobal('window', 'scroll', (evt) => {
        //window.scroll() d'angular2
      })
  }


  ngAfterViewInit() {

    $( document ).ready(function() {//permet d'attendre le chargement des composants fils!
      //Leftpanelfixed se fixe quand le scroll positionne en au le panel (et inversement)
      let topelement = $('#leftpanelfixed').offset().top;

      //Dimensionner la hauteur du panneau des espèces en fonction de la fenetre
      var hwin = $(window).height();
      var hoverflowInPanel = $('#overflowfix').offset().top - topelement;
      $('#overflowfix').height(hwin-hoverflowInPanel);
      //alert("hwin="+hwin+", hoverflowInPanel="+$('#overflowfix').offset().top+"-"+topelement+",overflowfix H="+$('#overflowfix').height()+"newH="+(hwin-hoverflowInPanel));

      //initialisation si le scroll est déjà bas
      if($(window).scrollTop()>topelement)
      {
        //console.log('bat => fixe');
        if(!$('#leftpanelfixed').hasClass("fixed"))
          $('#leftpanelfixed').addClass("fixed");
      }
      else{
        //console.log('haut => non fixe');
        if($('#leftpanelfixed').hasClass("fixed"))
          $('#leftpanelfixed').removeClass("fixed");
      }


      //Mise à jour de l'état du panneau fixe selon le scroll
      $(window).scroll(function()
      {
        /*//verification de la taille, ca déconne parfois...
        if($('#overflowfix').height()<11)
        {
          var newH = $(window).height()-($('#overflowfix').offset().top - $('#leftpanelfixed').offset().top);
          //alert("hwin="+hwin+", hoverflowInPanel="+$('#overflowfix').offset().top+"-"+topelement+",overflowfix H="+$('#overflowfix').height()+"newH="+(hwin-hoverflowInPanel));
          $('#overflowfix').height(newH);
        }*/
        this.scrollTop = $(window).scrollTop();

        if($(window).scrollTop()>topelement)
        {
          //console.log('bat => fixe');
          if(!$('#leftpanelfixed').hasClass("fixed"))
            $('#leftpanelfixed').addClass("fixed");
        }
        else{
          //console.log('haut => non fixe');
          if($('#leftpanelfixed').hasClass("fixed"))
            $('#leftpanelfixed').removeClass("fixed");
        }
      });



      //Positionne le tab selectionné contre le contenu associé.
      $('#obs_nav .card').click(function(){
        $('.card').removeClass("selected");
        $(this).addClass("selected");
      })

    });




  }
}
