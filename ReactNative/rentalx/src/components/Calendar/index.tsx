import * as React from 'react';
import {Calendar as CustomCalendar, LocaleConfig} from "react-native-calendars";
import {dayNames, dayNamesShort, monthNames, monthNamesShort} from "./constants";
import {useTheme} from "styled-components/native";
import { Feather } from '@expo/vector-icons';

LocaleConfig.locales['pt-br'] = {
    monthNames,
    monthNamesShort,
    dayNames,
    dayNamesShort,
    // @ts-ignore
    today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';

function Calendar() {
    const theme = useTheme();
    return (
        <CustomCalendar
            renderArrow={direction => (
                <Feather
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                    color={theme.colors.text} size={24}
                />
            )}
            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}
            theme={{
                textDayFontFamily: theme.fonts.family.inter.regular,
                textDayHeaderFontFamily: theme.fonts.family.archivo.semibold,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                textMonthFontWeight: 'bold',
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}
            firstDay={1}
            minDate={new Date()}
        />
    );
}

export default Calendar