import { useState, useEffect } from "react";
import {
    VStack,
    StackDivider,
    Heading,
    Text,
    Button,
    useRadioGroup,
    Center
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import BackHomeButton from "../components/BackHomeButton";
import RadioCard from "../components/RadioCard";

export default function Pick() {
    const summaries = [
        {
            textToSummarize:
                "Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            summaries: [
                "This is the summary 1 of the text number 1. Please choose this summary if you think its the best. Once you decided just click on it. Have a nice day!",
                "This is the summary 2 of the text number 1. Please choose this summary if you think its the best. Once you decided just click on it. Have a nice day!"
            ]
        },
        {
            textToSummarize:
                "Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            summaries: [
                "This is the summary 1 of the text number 2. Please choose this summary if you think its the best. Once you decided just click on it. Have a nice day!",
                "This is the summary 2 of the text number 2. Please choose this summary if you think its the best. Once you decided just click on it. Have a nice day!"
            ]
        },
        {
            textToSummarize:
                "Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            summaries: [
                "This is the summary 1 of the text number 3. Please choose this summary if you think its the best. Once you decided just click on it. Have a nice day!",
                "This is the summary 2 of the text number 3. Please choose this summary if you think its the best. Once you decided just click on it. Have a nice day!"
            ]
        }
    ];
    const [chosenSummary, setChosenSummary] = useState("");
    const [confirmedChoices, setConfirmedChoices] = useState([]);
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "summary",
        onChange: setChosenSummary
    });
    const [currentNumberKey, setCurrentNumberKey] = useState();
    const group = getRootProps();
    const confirmChoice = () => {
        if (chosenSummary == "") return;
        console.log("You picked: " + chosenSummary);
        setConfirmedChoices([...confirmedChoices, chosenSummary]);
        setChosenSummary("");
    };

    useEffect(() => {
        function handleKeyDown(e) {
            const char = e.which || e.keyCode;
            if (e.code === "Space") {
                confirmChoice();
            } else if (char === 49) {
                setCurrentNumberKey(1);
                setChosenSummary(
                    summaries[confirmedChoices.length].summaries[0]
                );
            } else if (char === 50) {
                setCurrentNumberKey(2);
                setChosenSummary(
                    summaries[confirmedChoices.length].summaries[1]
                );
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return function cleanup() {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [setChosenSummary, chosenSummary, setCurrentNumberKey]);

    return (
        <VStack align="start" spacing={8}>
            <BackHomeButton />
            {confirmedChoices.length < summaries.length ? (
                <>
                    <Heading textAlign="center" size="lg" width="100%">
                        Summarisation Experiment
                    </Heading>
                    <Center
                        backgroundColor="eleuther.black"
                        border="1px solid"
                        borderColor="#cccccc"
                        p={2}
                    >
                        {summaries[confirmedChoices.length].textToSummarize}
                    </Center>
                    <Heading size="md" width="100%" textAlign="center">
                        Please choose the better summarisation of the text above
                    </Heading>
                    <VStack align="start" spacing={2} {...group}>
                        {summaries[confirmedChoices.length].summaries.map(
                            (value, i) => {
                                const radio = getRadioProps({ value });
                                return (
                                    <RadioCard
                                        key={i}
                                        {...radio}
                                        isChecked={
                                            chosenSummary &&
                                            currentNumberKey === i + 1
                                        }
                                        autoFocus={true}
                                    >
                                        {value}
                                    </RadioCard>
                                );
                            }
                        )}
                    </VStack>
                    <Button
                        rightIcon={<ArrowForwardIcon w={5} h={5} />}
                        onClick={confirmChoice}
                        disabled={!chosenSummary}
                    >
                        Confirm
                    </Button>
                </>
            ) : (
                <>
                    <Heading size="lg">Thank you!</Heading>
                    <Text>You have reached the end of our current demo.</Text>
                    <Text>These are your choices:</Text>
                    <VStack
                        align="start"
                        spacing={2}
                        divider={<StackDivider borderColor="blue.700" />}
                    >
                        {confirmedChoices.map((value, i) => (
                            <Text key={i}>{value}</Text>
                        ))}
                    </VStack>
                </>
            )}
        </VStack>
    );
}
