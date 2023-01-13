import Papa from "papaparse";
export default class Portfolio extends React.Component {
    state = {
      persons: [],
      show: false,
      close: false,
    };
componentDidMount() {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5F_b9Zjd0QP9o2T6rT91qvpf8DzNOtvPYIIQfPbUqQlg6jU_mMT2VVCXPv14vVnQQigGeS-_Tz5lr/pub?output=csv",
    {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data)
        }
      })
    
}
}