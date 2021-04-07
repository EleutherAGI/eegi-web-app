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
    const [confirmedChoices, setConfirmedChoices] = useState([])
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "summary",
        onChange: setChosenSummary
    })
    const group = getRootProps()
    const confirmChoice = () => {
        if (chosenSummary == "") return;
        console.log("You picked: " + chosenSummary)
        setConfirmedChoices([...confirmedChoices, chosenSummary])
        setChosenSummary("")
    }
    return (
        <VStack align="start" spacing={8}>
            <BackHomeButton />
            {confirmedChoices.length < summaries.length ?
                <>
                    <Heading size="lg">Pick a human generated summary:</Heading>
                    <VStack align="start" spacing={2} {...group}>
                        {summaries[confirmedChoices.length].map((value,i)=> {
                            const radio = getRadioProps({ value })
                            return (
                                <RadioCard key={i} {...radio}>
                                    {value}
                                </RadioCard>
                            )
                        })}
                    </VStack> 
                    <Button rightIcon={<ArrowForwardIcon w={5} h={5} />} onClick={confirmChoice} disabled={!chosenSummary}>Confirm</Button>
                </>
            :
                <>
                    <Heading size="lg">Thank you!</Heading>
                    <Text>
                        You have reached the end of our current demo. 
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
