import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import _ from "lodash";
import { ruleOne, ruleTwo } from "./client";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log(event);
  const msisdn = _.get(event.pathParameters, "path", "");

  const resultOne = await ruleOne(msisdn);
  const resultTwo = await ruleTwo(msisdn);

  return {
    statusCode: 200,
    body: JSON.stringify({ resultOne, resultTwo }),
  };
};
