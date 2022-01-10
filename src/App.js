import React, { useEffect } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import RecorderControls from "components/recorder-controls";
import RecordingsList from "components/recordings-list";
import useRecorder from "hooks/useRecorder";
import "./app.css";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  const { startRecording } = handlers;

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true, language: "id" });
  }, []);

  const commands = [
    {
      command: ["tolong", "jangan", "jangan mendekat", "lepaskan", "berhenti"],
      callback: startRecording,
    },
  ];

  const { browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition({
    commands,
  });

  if (!browserSupportsSpeechRecognition) {
    return <h3 className="error-message">Browser doesn't support speech recognition.</h3>;
  }

  if (!isMicrophoneAvailable) {
    return <h3 className="error-message">This application can't be accessed without microphone. Please allow it first.</h3>
  }

  return (
    <section className="voice-recorder">
      <h1 className="title">Voice Recognition</h1>
      <div className="recorder-container">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
      </div>
    </section>
  );
}
