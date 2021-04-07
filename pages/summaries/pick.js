import { useState } from 'react'
import { VStack, StackDivider, Heading, Text, Button, useRadioGroup } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import BackHomeButton from '../../components/BackHomeButton'
import RadioCard from "../../components/RadioCard"

const pick = () => {
    const summaries = [
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ],
        ["Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ],
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ],
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ]
    ]
    const [chosenSummary, setChosenSummary] = useState('')
    const [summaryIndex, setSummaryIndex] = useState(0)
    const [confirmedChoices, setConfirmedChoices] = useState([])
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "summary",
        onChange: setChosenSummary
    })
    const group = getRootProps()
    const confirmChoise = () => {
        if (chosenSummary == "") return;
        console.log("You picked: " + chosenSummary)
        setConfirmedChoices([...confirmedChoices, chosenSummary])
        setChosenSummary("")
        setSummaryIndex(summaryIndex+1)
    }
    return (
        <VStack align="start" spacing={8}>
            <BackHomeButton />
            <Heading size="lg">Pick a human generated summary:</Heading>
            {summaryIndex < summaries.length ?
                <>
                    <VStack align="start" spacing={2} {...group}>
                        {summaries[summaryIndex].map((value,i)=> {
                            const radio = getRadioProps({ value })
                            return (
                                <RadioCard key={i} {...radio}>
                                    {value}
                                </RadioCard>
                            )
                        })}
                    </VStack> 
                    <Button variant="outline" colorScheme="blue" rightIcon={<ArrowForwardIcon w={5} h={5} />} onClick={confirmChoise} disabled={!chosenSummary}>Confirm</Button>
                </>
            :
                <>
                    <Text>
                        You have reached the end of our current dummy data. 
                        This is just a demo of our basic layout.
                    </Text>
                    <Text>
                        These are your choices:
                    </Text>
                    <VStack align="start" spacing={2} divider={<StackDivider borderColor="blue.700" />}>
                        {confirmedChoices.map((value, i) => 
                            <Text key={i}>{value}</Text>
                            )
                        }
                    </VStack>
                </>
            }
        </VStack> 
    )
}

export default pick
