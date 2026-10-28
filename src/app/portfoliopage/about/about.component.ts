import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  // My Drive/CV.pdf — replace the same file in Finder; do not delete and re-upload.
  readonly cvUrl =
    'https://drive.google.com/file/d/1d6BXC9hgNkPLxlIQ-h8COGEiEywO6iqe/view';
  photoLoaded = false;

  @ViewChild('profilePhoto') profilePhoto?: ElementRef<HTMLImageElement>;

  readonly logos = [
    { file: 'html.png', alt: 'HTML' },
    { file: 'css.png', alt: 'CSS' },
    { file: 'javascript.png', alt: 'JavaScript' },
    { file: 'typescript.png', alt: 'TypeScript' },
    { file: 'angular.png', alt: 'Angular' },
    { file: 'react.png', alt: 'React' },
    { file: 'nextjs.png', alt: 'Next.js' },
    { file: 'flutter.png', alt: 'Flutter' },
    { file: 'dart.png', alt: 'Dart' },
    { file: 'dotnet.png', alt: '.NET' },
    { file: 'nodejs.png', alt: 'Node.js' },
    { file: 'nestjs.png', alt: 'NestJS' },
    { file: 'python.png', alt: 'Python' },
    { file: 'sql.png', alt: 'SQL Server' },
    { file: 'postgresql.png', alt: 'PostgreSQL' },
    { file: 'mongo.png', alt: 'MongoDB' },
    { file: 'azure.png', alt: 'Azure' },
    { file: 'aws.png', alt: 'AWS' },
    { file: 'gcp.png', alt: 'Google Cloud' },
    { file: 'docker.png', alt: 'Docker' },
    { file: 'kubernetes.png', alt: 'Kubernetes' },
    { file: 'git.png', alt: 'Git' },
    { file: 'langgraph.png', alt: 'LangGraph' },
    { file: 'langchain.png', alt: 'LangChain' },
    { file: 'qdrant.png', alt: 'Qdrant' },
    { file: 'huggingface.png', alt: 'Hugging Face' },
    { file: 'gemini.png', alt: 'Google Gemini' },
    { file: 'anthropic.png', alt: 'Anthropic' },
    { file: 'ollama.png', alt: 'Ollama' },
    { file: 'pytorch.png', alt: 'PyTorch' },
    { file: 'tensorflow.png', alt: 'TensorFlow' },
    { file: 'nvidia.png', alt: 'NVIDIA' },
  ];

  ngAfterViewInit(): void {
    const img = this.profilePhoto?.nativeElement;
    if (img?.complete && img.naturalWidth > 0) {
      this.photoLoaded = true;
    }
  }

  onPhotoLoad(): void {
    this.photoLoaded = true;
  }
}
