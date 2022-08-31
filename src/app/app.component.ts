import { Component } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
// required for validation
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'wav-voice';

  //Lets initiate Record OBJ
   public record: any;
   //Will use this flag for detect recording
   public recording = false;
   //Url of Blob
   public url: any;
   public error: any;
   constructor(private domSanitizer: DomSanitizer) {
   }
   sanitize(url:string){
       return this.domSanitizer.bypassSecurityTrustUrl(url);
   }
   /**
    * Start recording.
    */
   initiateRecording() {

       this.recording = true;
       let mediaConstraints = {
           video: false,
           audio: true
       };
       navigator.mediaDevices
           .getUserMedia(mediaConstraints)
           .then(this.successCallback.bind(this), this.errorCallback.bind(this));
   }
   /**
    * Will be called automatically.
    */
   successCallback(stream: any) {
       var options = {
           mimeType: "audio/wav",
           numberOfAudioChannels: 1
       };
       //Start Actuall Recording
       var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
       this.record = new StereoAudioRecorder(stream, options);
       this.record.record();
   }
   /**
    * Stop recording.
    */
   stopRecording() {
       this.recording = false;
       this.record.stop(this.processRecording.bind(this));
   }
   /**
    * processRecording Do what ever you want with blob
    * @param  {any} blob Blog
    */
   processRecording(blob: any) {
       this.url = URL.createObjectURL(blob);
   }
   /**
    * Process Error.
    */
   errorCallback(error: any) {
       this.error = 'Can not play audio in your browser';
   }
}
