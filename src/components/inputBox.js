export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    return (
        <div className="border-white p-10 border-radius-10 text-center">
            <div className="text-white flex-justify-between">
                <div>
                    <p>{label}</p>
                    <input type="number"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
                </div>
                <div>
                    <p>
                        Currency Type
                    </p>
                    <select
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {
                            Object.keys(currencyOptions)?.map((val, index) => {
                                return (
                                    <option value={val}>{val}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>

        </div>
    )
}

