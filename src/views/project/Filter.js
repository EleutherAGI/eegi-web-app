import { useState, useEffect } from "react";
import {
    Heading,
    Button,
    Text,
    useRadioGroup,
    VStack,
    CircularProgress
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import BackHomeButton from "../../components/BackHomeButton";
import RadioCard from "../../components/RadioCard";
import { getComparison, updateComparison } from "../../utils/api";

export default function CompareText() {
    const [page, setPage] = useState(1);
    const [nextSample, setNextSample] = useState([]);
    const [sample, setSample] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentNumberKey, setCurrentNumberKey] = useState(-1);
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "comparison",
        onChange: (value) => {
            setCurrentNumberKey(
                [sample.text_sample_1, sample.text_sample_2].indexOf(value)
            );
        }
    });
    const group = getRootProps();

    useEffect(() => {
        getComparison()
            .then((res) => {
                setNextSample(res);
                setSample(nextSample);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [page]);

    const confirmChoice = async () => {
        if (!sample || currentNumberKey === -1) return;
        setIsLoading(true);
        const data = await updateComparison(
            currentNumberKey === 0 ? true : false,
            sample.comparison_id
        );

        if (data.message === "success") {
            setCurrentNumberKey(-1);
            setPage(page + 1);
        } else {
            console.warn("unable to send the data. ", data);
        }
        setIsLoading(false);
    };

    // Temporary disable keyboard keys until we figure it out
    // useEffect(() => {
    //     if (sample && page !== 1) {
    //         function handleKeyDown(e) {
    //             const char = e.which || e.keyCode;
    //             if (e.code === "Space") {
    //                 confirmChoice();
    //             } else if (char === 49) {
    //                 setCurrentNumberKey(0);
    //             } else if (char === 50) {
    //                 setCurrentNumberKey(1);
    //             }
    //         }
    //         window.addEventListener("keydown", handleKeyDown);
    //         return function cleanup() {
    //             window.removeEventListener("keydown", handleKeyDown);
    //         };
    //     }
    // }, [setCurrentNumberKey, currentNumberKey]);

    const StartPage = () => {
        return (
            <>
                <Heading size="lg">Thanks for helping out</Heading>
                <Text>
                    you will be shown two peices of text and you have to select
                    which one you prefer, once you have pressed submit your
                    choice will be finalized
                </Text>
                <Button
                    rightIcon={<ArrowForwardIcon w={5} h={5} />}
                    onClick={() => setPage(page + 1)}
                >
                    Get started
                </Button>
            </>
        );
    };

    const CompareTextPage = () => {
        return (
            <>
                <Heading textAlign="center" size="lg" width="100%">
                    Dataset Filtering Experiment
                </Heading>
                <Heading size="md" width="100%" textAlign="center">
                    Please choose your favourite text
                </Heading>

                <VStack align="start" spacing={2} {...group}>
                    {[sample.text_sample_1, sample.text_sample_2].map(
                        (value, i) => {
                            const radio = getRadioProps({ value });
                            return (
                                <RadioCard key={i} {...radio}>
                                    {value}
                                </RadioCard>
                            );
                        }
                    )}
                </VStack>
                <Button
                    rightIcon={<ArrowForwardIcon w={5} h={5} />}
                    onClick={confirmChoice}
                    disabled={currentNumberKey === -1}
                >
                    {isLoading ? (
                        <CircularProgress isIndeterminate size="24px" />
                    ) : (
                        "Confirm"
                    )}
                </Button>
            </>
        );
    };

    return (
        <VStack align="start" spacing={8}>
            <BackHomeButton />
            {page === 1 ? <StartPage /> : <CompareTextPage />}
        </VStack>
    );
}
