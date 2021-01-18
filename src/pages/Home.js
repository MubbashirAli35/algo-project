import React, { useState } from 'react';
import { Container, Row, Dropdown, Form, Button } from 'react-bootstrap';
import './Home.css';

const lcs = require('longest-common-subsequence');
const levenshtein = require('js-levenshtein');
var knapsack = require('knapsack-js');

const Home = () => {
    const [problem, setProblem] = useState('Longest Common Subsequence');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [output, setOutput] = useState('');
    var items = [
        {"pear": 1},
        {"apple": 7},
        {"grape": 0},
        {"banana": 2},
        {"orange": "NA"},
        {"strawberry": 4},
        {"mandarin": null},
        {"durian": 1},
        {"peach": undefined},
        {}
      ];

    const onSolvePressed = () => {
        switch(problem) {
            case 'Longest Common Subsequence':
                setOutput(lcs(input1, input2, true));
            case 'Levenshtein Distance':
                setOutput(levenshtein(input1,input2 )); 
           /* case '0-1-knapsack-problem':
                setOutput(knapsack.resolve(input1, items));*/
        }
    }

    return(
        <Container className='p-0 main-container' fluid >
            <Container className='form-container' fluid >
                <Row style={{ height: '90%', width: '90%', display: 'flex',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }} >
                    <h3>Dynamic Programming</h3>

                    <Row style={{ height: '17%', display: 'flex', flexDirection: 'column',
                        alignItems: 'flex-start', justifyContent: 'space-around', alignSelf: 'flex-start' }} >
                        <p style={{ fontWeight: 'bold' }} >Select a Problem</p>

                        <Dropdown>
                            <Dropdown.Toggle>
                                {problem}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Longest Common Subsequence' >
                                    Longest Common Subsequence
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Shortest Common Supersequence' > 
                                    Shortest Common Supersequence
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Levenshtein Distance' >
                                    Levenshtein Distance
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Longest Increasing Subsequence' >
                                    Longest Increasing Subsequence
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Matrix Chain Multiplication' >
                                    Matrix Chain Multiplication
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='0-1-knapsack-problem' >
                                    0-1-knapsack-problem
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Partition-problem' >
                                    Partition-problem
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Rod Cutting Problem' >
                                    Rod Cutting Problem
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Coin-change-making-problem' >
                                    Coin-change-making-problem
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={(eventKey) => setProblem(eventKey)}
                                    eventKey='Word Break Problem' >
                                    Word Break Problem
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>

                    <Row style={{ height: '17%', display: 'flex', flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'space-around', alignSelf: 'flex-start',
                            width: '100%' }} >
                        <p style={{ fontWeight: 'bold' }} >Enter your Input 1 here</p>
                        
                        <Form.Control onChange={e => setInput1(e.target.value)} />
                    </Row>

                    <Row style={{ height: '17%', display: 'flex', flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'space-around', alignSelf: 'flex-start',
                            width: '100%' }} >
                        <p style={{ fontWeight: 'bold' }} >Enter your Input 2 here (if required)</p>
                        
                        <Form.Control onChange={e => setInput2(e.target.value)} />
                    </Row>

                    <Row style={{ height: '17%', display: 'flex', flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'space-around', alignSelf: 'flex-start',
                            width: '100%' }} >
                        <p style={{ fontWeight: 'bold' }} >Output</p>
                        
                        <Form.Control value={output} />
                    </Row>

                    <Button style={{ width: '40%', opacity: 1 }} onClick={() => onSolvePressed()} >
                        Solve!
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Home;