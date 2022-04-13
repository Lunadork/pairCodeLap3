
const Sparkline = props => {
    const sparklineRef = useRef(null);
    const [currentDatapoint, setCurrentDatapoint] = useState(props.values[0]);
  
    const options = {
      onmousemove: (event, datapoint) => {
        if (datapoint.timestamp !== currentDatapoint.timestamp) {
          setCurrentDatapoint(datapoint);
        }
      },
      onmouseout: (event) => {
        setCurrentDatapoint(props.values[0]);
      }
    };
  
    useEffect(() => {
      const sortedValues = props.values.sort((a,b) => a.timestamp - b.timestamp)
      
      // initialize sparkline on mount after the element has rendered
    //   sparkline(sparklineRef.current, sortedValues, options);
    }, []);
  
    const getText = datapoint => {
      const dateString = new Date(datapoint.timestamp).toLocaleString("en-US", {
        month: "short",
        day: "numeric"
      });
      return `${dateString}: ${datapoint.value}`;
    };
  
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <svg
          ref={sparklineRef}
          width="200"
          height="60"
          strokeWidth="3"
          fill="rgba(0, 0, 255, .2)"
        ></svg>
        <div>
          {currentDatapoint?.timestamp ? getText(currentDatapoint) : ""}
        </div>
      </div>
    );
  };
