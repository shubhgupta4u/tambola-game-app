
import { act, renderHook, waitFor } from "@/common/utils/test-util";
import useAudioPlayingState from "@/modules/TambolaGame/hooks/useAudioPlayingState";


describe("useAudioPlayingState hook", () => {
    
    it("should return the initial values for  audioPlaying, animationNumber and setPlayingAudio", async () => {

        //Arrange
        const { result } = renderHook(useAudioPlayingState);

        //Act
        const { audioPlaying, animationNumber, setPlayingAudio } = result.current;

        //Assert
        expect(audioPlaying).toBeFalsy();
        expect(animationNumber).toBeUndefined();
        expect(setPlayingAudio).toEqual(expect.any(Function))
    });

    it("should assign true to audioPlaying on setPlayingAudio(true) function call", async () => {
        //Arrange
        const { result } = renderHook(useAudioPlayingState);

        //Act
        act(() => {
            result.current.setPlayingAudio(true)
        });

        //Assert
        expect(result.current.audioPlaying).toBeTruthy();
    });

    it("should reset audioPlaying to false after 5 sec on setPlayingAudio(true) function call", async () => {
        //Arrange
        const { result } = renderHook(useAudioPlayingState);

        //Act
        act(() => {
            result.current.setPlayingAudio(true);
        });

        //Assert
        result.current.setPlayingAudio(true);
        
        await new Promise((r) => setTimeout(r, 3000));

        expect(result.current.audioPlaying).toBeFalsy();

   
    },5000);

    it("should assign false to audioPlaying on setPlayingAudio(false) function call", async () => {
        //Arrange
        const { result } = renderHook(useAudioPlayingState);

        //Act
        act(() => {
            result.current.setPlayingAudio(false)
        });

        //Assert
        expect(result.current.audioPlaying).toBeFalsy();
    });

});

