import React from "react";
import { render, screen } from "@testing-library/react";
import ScoreTable from "../ScoreTable";
import { formatDate } from '../../../../utils/formaterDates/formaterDates';

describe('ScoreTable component', () => {
  
	test('should show data into table', () => {
		render(<ScoreTable date={formatDate(Date.now().toLocaleString())} score={10} />);
		expect(screen.getByText('10')).toBeInTheDocument();
		expect(screen.getByText(formatDate(Date.now().toLocaleString()))).toBeInTheDocument();
	})
	
});
