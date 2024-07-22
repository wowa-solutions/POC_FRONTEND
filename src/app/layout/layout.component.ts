import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements AfterViewInit {
  faqs = [
    { question: 'Was ist HHC?', answer: 'HHC ist ...', open: false },
    { question: 'Ist HHC natürlich?', answer: 'HHC wird ...', open: false },
    { question: 'Ist HHC legal?', answer: 'In den meisten ...', open: false },
    {
      question: 'Wie ist die Wirkung von HHC?',
      answer: 'Die Wirkung von HHC ...',
      open: false,
    },
    {
      question: 'Warum soll ich die HHC Produkte im Leafz HHC Shop kaufen?',
      answer: 'Unsere Produkte ...',
      open: false,
    },
  ];

  toggleFaq(faq: any, event: MouseEvent) {
    event.stopPropagation();
    faq.open = !faq.open;
  }

  ngAfterViewInit() {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    videoWrappers.forEach((wrapper) => {
      const video = wrapper.querySelector('video') as HTMLVideoElement | null;
      const playButton = wrapper.querySelector(
        '.custom-play-button',
      ) as HTMLElement | null;

      if (video && playButton) {
        playButton.addEventListener('click', () => {
          video.play();
          playButton.style.display = 'none';
        });

        video.addEventListener('pause', () => {
          playButton.style.display = 'flex';
        });

        video.addEventListener('playing', () => {
          playButton.style.display = 'none';
        });

        // Video stoppen bei Klick auf das Video selbst
        video.addEventListener('click', () => {
          if (!video.paused) {
            video.pause();
          } else {
            video.play();
          }
        });
      }
    });
  }
}
