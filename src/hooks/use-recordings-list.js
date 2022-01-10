import { useState, useEffect } from "react";
import { deleteAudio } from "handlers/recordings-list";
import { formatDate } from "utils/format-time";
import generateKey from "utils/generate-key";

export default function useRecordingsList(audio) {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    if (audio)
      setRecordings((prevState) => {
        return [
          ...prevState,
          { key: generateKey(), audio, name: `Recording - ${formatDate()}` },
        ];
      });
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
  };
}
