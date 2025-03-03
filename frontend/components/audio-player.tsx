import React, { FC, useRef, useState } from 'react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [wasPlayed, setWasPlayed] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Start playback when user clicks "Play"
  const handlePlay = () => {
    if (!wasPlayed && audioRef.current) {
      audioRef.current.play();
      setWasPlayed(true);
    }
  };

  // Update the current time as the audio plays
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Set the total duration once metadata is loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Calculate progress percentage for the progress bar
  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Audio element without built-in controls */}
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Play button */}
      <button
        onClick={handlePlay}
        disabled={wasPlayed}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Play
      </button>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-300 mt-4 rounded overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-100"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
