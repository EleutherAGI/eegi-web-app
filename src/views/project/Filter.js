import { useState, useEffect } from "react";
import {
    Heading,
    Button,
    Text,
    Input,
    Stack,
    InputGroup,
    InputRightElement,
    Container,
    CircularProgress,
    Link,
    Center,
    RadioGroup,
    Radio,
    VStack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import BackHomeButton from "../../components/BackHomeButton";
import RadioCard from "../../components/RadioCard";
// TODO use RadioCard again, i just couldn't figure out how to integrate it
import { getComparison, updateComparison } from "../../utils/api";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export default function CompareText() {
    const [page, setPage] = useState(1);
    const [nextSample, setNextSample] = useState([]);
    const [sample, setSample] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentNumberKey, setCurrentNumberKey] = useState(-1);

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
        setIsLoading(true);
        const data = await updateComparison(
            currentNumberKey == "0" ? true : false,
            sample.comparison_id
        );
        setIsLoading(false);
        setCurrentNumberKey(-1);
        setPage(page + 1);
    };

    useEffect(() => {
        function handleKeyDown(e) {
            const char = e.which || e.keyCode;
            if (e.code === "Space") {
                confirmChoice();
            } else if (char === 49) {
                setCurrentNumberKey("0");
            } else if (char === 50) {
                setCurrentNumberKey("1");
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return function cleanup() {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [setCurrentNumberKey, currentNumberKey]);

    return (
        <VStack h="100vh" align="stretch">
            <Header />
            <Center h="100%" px="2rem">
                <Container maxW="container.lg">
                    <Container
                        p={8}
                        maxWidth="500px"
                        borderWidth={1}
                        borderRadius={8}
                        boxShadow="lg"
                        ml="auto"
                        mr="auto"
                    >
                        <VStack align="start" spacing={8}>
                            <BackHomeButton />
                            {page == 1 ? (
                                <>
                                    <Heading size="lg">
                                        Thanks for helping out
                                    </Heading>
                                    <Text>
                                        you will be shown two peices of text and
                                        you have to select which one you prefer,
                                        once you have pressed submit your choice
                                        will be finalized
                                    </Text>
                                    <Button
                                        rightIcon={
                                            <ArrowForwardIcon w={5} h={5} />
                                        }
                                        onClick={() => setPage(page + 1)}
                                    >
                                        Get started
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Heading
                                        textAlign="center"
                                        size="lg"
                                        width="100%"
                                    >
                                        Dataset Filtering Experiment
                                    </Heading>
                                    <Heading
                                        size="md"
                                        width="100%"
                                        textAlign="center"
                                    >
                                        Please choose your favourite text
                                    </Heading>
                                    <RadioGroup
                                        onChange={setCurrentNumberKey}
                                        value={currentNumberKey}
                                    >
                                        <VStack align="start" spacing={2}>
                                            <Radio key={0} value={0}>
                                                {sample.text_sample_1}
                                            </Radio>
                                            <Radio key={1} value={1}>
                                                {sample.text_sample_2}
                                            </Radio>
                                        </VStack>
                                    </RadioGroup>
                                    <Button
                                        rightIcon={
                                            <ArrowForwardIcon w={5} h={5} />
                                        }
                                        onClick={confirmChoice}
                                        disabled={currentNumberKey == -1}
                                    >
                                        Confirm
                                    </Button>
                                </>
                            )}
                        </VStack>
                    </Container>
                </Container>
            </Center>
            <Footer />
        </VStack>
    );
}
