// Speech to Text Conversion in React Native – Voice Recognition
// https://aboutreact.com/speech-to-text-conversion-in-react-native-voice-recognition/

// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

// import Voice
import Voice from "react-native-voice";
import Tts from "react-native-tts";
import "./ChatBubble";
import ChatBubble from "./ChatBubble";

const VoiceTest = () => {
  const [error, setError] = useState("");
  const [end, setEnd] = useState("");
  const [started, setStarted] = useState("");
  const [results, setResults] = useState([]);
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    //Invoked when .start() is called without error
    console.log("onSpeechStart: ", e);
    setStarted("√");
  };

  const onSpeechEnd = (e) => {
    //Invoked when SpeechRecognizer stops recognition
    console.log("onSpeechEnd: ", e);
    setEnd("√");
  };

  const onSpeechError = (e) => {
    //Invoked when an error occurs.
    console.log("onSpeechError: ", e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e) => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log("onSpeechResults: ", e);
    setResults(e.value);
    setTexts((oldText) => [...oldText, e.value[0]]);
    console.log("setTexts: ", texts);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start("en-US");
      setError("");
      setStarted("");
      setResults([]);
      setEnd("");
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setError("");
      setStarted("");
      setResults([]);
      setEnd("");
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Voice Recognition</Text>
        <Text style={styles.textStyle}>Press mic to start Recognition</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>{`Started: ${started}`}</Text>
          <Text style={styles.textWithSpaceStyle}>{`End: ${end}`}</Text>
        </View>
        <TouchableHighlight onPress={startRecognizing}>
          <Image
            style={styles.imageButton}
            source={{
              uri:
                "https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png",
            }}
          />
        </TouchableHighlight>
        <Text style={styles.textStyle}>Results</Text>
        <ScrollView style={{ marginBottom: 42 }}>
          {
            (texts.map((text, index) => {
              Tts.speak(text, {
                androidParams: {
                  KEY_PARAM_PAN: -1,
                  KEY_PARAM_VOLUME: 0.5,
                  KEY_PARAM_STREAM: "STREAM_MUSIC",
                },
              });
              return <ChatBubble key={index} text={text} />;
            }),
            Tts.stop())
          }
        </ScrollView>
        <View style={styles.horizontalView}>
          <TouchableHighlight
            onPress={stopRecognizing}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}>Stop</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={cancelRecognizing}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={destroyRecognizer}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}>Destroy</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#FD9D9D",
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  horizontalView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  textStyle: {
    textAlign: "center",
    padding: 12,
  },
  imageButton: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: "center",
    color: "#B0171F",
  },
});

export default VoiceTest;
