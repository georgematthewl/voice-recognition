import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "hooks/use-recordings-list";
import "./styles.css";

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="recordings-container">
      {recordings.length > 0 ? (
        <>
          <h1>Your recordings</h1>
          <div className="recordings-list">
            {recordings.map((record) => (
              <>
                <h4>{record.name}</h4>
                <div className="record" key={record.key}>
                  <audio controls src={record.audio} />
                  <div className="delete-button-container">
                    <button
                      className="delete-button"
                      title="Delete this audio"
                      onClick={() => deleteAudio(record.key)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <div className="no-records">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            size="2x"
            color="#fff"
          />
          <span style={{ marginTop: 8 }}>You don't have any records</span>
        </div>
      )}
    </div>
  );
}
