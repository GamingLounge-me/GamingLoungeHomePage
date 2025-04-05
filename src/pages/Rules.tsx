var rules = {
    general: {
        "1": "1a",
        "2": {
            "1": "1b",
            "2": "1c"
        }
    },
    discord: {
        "1": "1a",
        "2": "1b"
    }
};

const Rules = () => {
    return (
        <main>
            <div className="block">
                <h1>Rules</h1>
                {Object.entries(rules).map(([category, rules]) => (
                    <>
                        <h3><a id={category} href={"#" + category}>{category.charAt(0).toUpperCase() + category.slice(1)}</a></h3>
                        <ul>
                            {Object.entries(rules).map(([ruleNumber, ruleText]) => (
                                <li key={ruleNumber}>
                                    {ruleNumber}. {typeof ruleText === 'string' ? ruleText : Object.entries(ruleText).map(([subRuleNumber, subRuleText]) => (
                                        <ul style={{ listStyle: "circle" }}>
                                            <li>{subRuleText}</li>
                                        </ul>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
        </main >
    )
};

export default Rules